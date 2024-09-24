import codecs
import csv
import json
import re
import sys
from datetime import datetime


def clean_string(s):
    return re.sub(r'[\u0000-\u001f\u007f-\u009f\u202a-\u202e]', '', s)


def convert_time(time_str):
    try:
        time_obj = datetime.strptime(time_str.strip(), "%I:%M %p")
        return time_obj.strftime("%H:%M:%S")
    except ValueError:
        return time_str


def csv_to_typescript(csv_file):
    sessions = []

    with codecs.open(csv_file, 'r', 'utf-8-sig') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cleaned_row = {k: clean_string(v) for k, v in row.items()}

            if cleaned_row['Status'] != 'Confirmed':
                continue

            converted_time = convert_time(cleaned_row['Schedule'])

            session = {
                'id': int(cleaned_row['Session ID']) if cleaned_row['Session ID'] else len(sessions) + 1,
                'title': cleaned_row['Title'],
                'description': cleaned_row['Description'],
                'abstract': cleaned_row['Abstract'],
                'speaker': cleaned_row['Speaker'],
                'speakerImage': "https://example.com/speaker-image.jpg",  # Placeholder image
                'time': {
                    'start': f"new Date('2024-09-23T{converted_time}')",
                    'end': f"new Date('2024-09-23T{converted_time}')"  # TODO: Calculate end time
                },
                'category': cleaned_row['Category'],
                'level': cleaned_row['Level'],
                'room': cleaned_row['Room '].strip()  # Note the space in 'Room '
            }

            sessions.append(session)

    typescript_content = f"""
import {{Session}} from "@/app/types/session";

const sessions: Session[] = {json.dumps(sessions, indent=4, ensure_ascii=False)};

export default sessions;
"""

    # Replace date strings with actual Date objects
    typescript_content = re.sub(r'"(new Date\([^)]+\))"', r'\1', typescript_content)

    return typescript_content


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <input_csv_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output = csv_to_typescript(input_file)
    print(output)
