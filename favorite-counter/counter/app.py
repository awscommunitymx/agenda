import os

import boto3
from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver
from aws_lambda_powertools.logging import correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext
from botocore.exceptions import ClientError

app = APIGatewayRestResolver()
logger = Logger()
tracer = Tracer()

TABLE_NAME = os.environ.get("TABLE_NAME")
PK = "event_id"
ATTRIBUTE = "favorite_count"


@tracer.capture_method
def atomic_increment(
    *,
    table_name=TABLE_NAME,
    pk_name=PK,
    attribute_name=ATTRIBUTE,
    increment_by=1,
    pk_value: str,
):
    """
    Atomically increment a numeric attribute for a given primary key in DynamoDB.

    :param table_name: Name of the DynamoDB table
    :param pk_name: Name of the primary key attribute
    :param pk_value: Value of the primary key
    :param attribute_name: Name of the attribute to increment
    :param increment_by: Value to increment by (default: 1)
    :return: The updated value of the attribute after increment
    """
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(table_name)

    try:
        response = table.update_item(
            Key={pk_name: pk_value},
            UpdateExpression=f"SET {attribute_name} = if_not_exists({attribute_name}, :start) + :increment",
            ConditionExpression=f"{attribute_name} >= :start",
            ExpressionAttributeValues={":start": 0, ":increment": increment_by},
            ReturnValues="UPDATED_NEW",
        )
        return response["Attributes"][attribute_name]
    except ClientError as e:
        logger.error(f"Error incrementing value: {e.response['Error']['Message']}")
        raise


@tracer.capture_method
def set_counter(event_id: str, increment_by: int):
    try:
        atomic_increment(pk_value=event_id, increment_by=increment_by)
    except ClientError:
        return {"error": "Failed to increment counter"}, 500
    return {"id": event_id, "count": 1}


@app.post("/favorite/inc/<event_id>")
def increment_counter(event_id: str):
    return set_counter(event_id, 1)


@app.post("/favorite/dec/<event_id>")
def decrement_counter(event_id: str):
    return set_counter(event_id, -1)


@logger.inject_lambda_context(correlation_id_path=correlation_paths.API_GATEWAY_REST)
@tracer.capture_lambda_handler
def lambda_handler(event, context: LambdaContext):
    if TABLE_NAME is None:
        raise ValueError("TABLE_NAME environment variable must be set")

    return app.resolve(event, context)
