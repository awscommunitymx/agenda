import json
import os
from decimal import Decimal

import boto3
from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver, CORSConfig
from aws_lambda_powertools.logging import correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext
from botocore.exceptions import ClientError

cors_config = CORSConfig(
    allow_origin="*",
    allow_headers=["*"],
)

app = APIGatewayRestResolver(cors=cors_config)
logger = Logger()
tracer = Tracer()

TABLE_NAME = os.environ.get("TABLE_NAME")
PK = "event_id"
ATTRIBUTE = "favorite_count"

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(TABLE_NAME)


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return int(obj)
        return super(DecimalEncoder, self).default(obj)


@tracer.capture_method
def get_all_items():
    response = table.scan()
    return response["Items"]


@tracer.capture_method
def create_item(event_id: str):
    try:
        table.put_item(Item={PK: event_id, ATTRIBUTE: 1})
    except ClientError as e:
        logger.error(f"Error creating item: {e.response['Error']['Message']}")
        return {"error": f"Failed to create item: {e}"}, 500
    return {"id": event_id, "count": 1}, 201


@app.post("/favorite/inc/<event_id>")
def increment_counter(event_id: str):
    try:
        response = table.update_item(
            Key={PK: event_id},
            UpdateExpression=f"ADD {ATTRIBUTE} :incr",
            ExpressionAttributeValues={":incr": 1},
            ConditionExpression=f"attribute_exists({PK})",
            ReturnValues="UPDATED_NEW",
        )
    except ClientError as e:
        if e.response["Error"]["Code"] == "ConditionalCheckFailedException":
            return create_item(event_id)

        logger.error(f"Error incrementing value: {e.response['Error']['Message']}")
        return {"error": "Failed to increment counter"}, 500

    return {"id": event_id, "count": response["Attributes"][ATTRIBUTE]}, 200


@app.post("/favorite/dec/<event_id>")
def decrement_counter(event_id: str):
    try:
        response = table.update_item(
            Key={PK: event_id},
            UpdateExpression=f"ADD {ATTRIBUTE} :decr",
            ExpressionAttributeValues={":decr": -1, ":zero": 0},
            ConditionExpression=f"attribute_exists({PK}) AND {ATTRIBUTE} > :zero",
            ReturnValues="UPDATED_NEW",
        )
    except ClientError as e:
        logger.error(f"Error decrementing value: {e.response['Error']['Message']}")
        return {"error": "Failed to decrement counter"}, 500

    return {"id": event_id, "count": response["Attributes"][ATTRIBUTE]}, 200


@app.get("/favorite")
def get_counter():
    sorted_items = sorted(get_all_items(), key=lambda x: x[ATTRIBUTE], reverse=True)
    return json.dumps(sorted_items, cls=DecimalEncoder), 200


@logger.inject_lambda_context(correlation_id_path=correlation_paths.API_GATEWAY_REST)
@tracer.capture_lambda_handler
def lambda_handler(event, context: LambdaContext):
    if TABLE_NAME is None:
        raise ValueError("TABLE_NAME environment variable must be set")

    return app.resolve(event, context)
