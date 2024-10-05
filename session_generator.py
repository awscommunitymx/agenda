import codecs
import csv
import json
import re
import sys
from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Optional

SESSION_DATE = "2024-10-05"


@dataclass
class Time:
    start: str
    end: str


@dataclass
class SpecialSession:
    id: str
    title: str
    abstract: str
    description: str
    language = "Spanish"
    keywords = []
    cta: str
    speaker = ""
    speakerImage = ""
    time: Time
    category = "Habilidades blandas"
    level = "L100"
    room: str
    is_special = True
    icon: str
    import_icon_from: Optional[str] = None


SPECIAL_SESSIONS: list[SpecialSession] = [
    SpecialSession(
        id="registro",
        title="Registro",
        abstract="Registro de asistentes",
        description="Regístrate en la entrada del evento.",
        cta="Registrarse",
        time=Time("08:00", "17:00"),
        room="Minerva",
        icon="FaRegIdBadge",
        import_icon_from="react-icons/fa",
    ),
    SpecialSession(
        id="inauguracion",
        title="Inauguración",
        abstract="Inauguración del evento",
        description="Bienvenida al evento, palabras de apertura.",
        cta="Inauguración",
        time=Time("09:00", "09:30"),
        room="Minerva",
        icon="IoRibbonOutline",
        import_icon_from="react-icons/io5"
    ),
    SpecialSession(
        id="comida",
        title="Lunch",
        abstract="Hora de la comida!",
        description="Dirígete al área de comida y disfruta de un descanso.",
        cta="Comer",
        time=Time("14:30", "15:30"),
        room="Minerva",
        icon="IoFastFoodOutline",
        import_icon_from="react-icons/io5"
    ),
    SpecialSession(
        id="brindis-networking",
        title="Brindis y Networking",
        abstract="Brindis y Networking",
        description="Disfruta de un brindis y conoce a otros asistentes.",
        cta="Brindis",
        time=Time("17:30", "18:30"),
        room="Minerva",
        icon="PiChampagneBold",
        import_icon_from="react-icons/pi"
    ),
    SpecialSession(
        id="clausura",
        title="Clausura",
        abstract="Clausura del evento",
        description="Palabras de cierre y agradecimiento.",
        cta="Clausura",
        time=Time("18:30", "19:00"),
        room="Minerva",
        icon="IoRibbonOutline",
    )
]


def clean_string(s):
    return re.sub(r"[\u0000-\u001f\u007f-\u009f\u202a-\u202e]", "", s)


def convert_time(time_str) -> datetime:
    try:
        return datetime.strptime(time_str.replace(".", "").upper().strip(), "%I:%M %p")
    except ValueError:
        return datetime.strptime("12:00 AM", "%I:%M %p")


def get_duration(time_str):
    pattern = r"\((\d+) minutos\)"
    match = re.search(pattern, time_str)
    if match:
        return int(match.group(1))
    return 0


def create_special_sessions():
    sessions = []
    for special_session in SPECIAL_SESSIONS:
        session = {
            "id": special_session.id,
            "title": special_session.title,
            "description": special_session.description,
            "abstract": special_session.abstract,
            "language": special_session.language,
            "keywords": special_session.keywords,
            "cta": special_session.cta,
            "speaker": special_session.speaker,
            "speakerImage": special_session.speakerImage,
            "time": {
                "start": f"new Date('{SESSION_DATE}T{special_session.time.start}:00-06:00')",
                "end": f"new Date('{SESSION_DATE}T{special_session.time.end}:00-06:00')",
            },
            "category": special_session.category,
            "level": special_session.level,
            "room": special_session.room,
            "isSpecial": special_session.is_special,
            "icon": special_session.icon,
        }

        sessions.append(session)

    return sessions


def csv_to_typescript(csv_file):
    sessions = create_special_sessions()

    with codecs.open(csv_file, "r", "utf-8-sig") as file:
        reader = csv.DictReader(file)
        for row in reader:
            cleaned_row = {k: clean_string(v) for k, v in row.items()}

            if cleaned_row["Status"] != "Confirmed":
                continue

            converted_time = convert_time(cleaned_row["Schedule"])
            # Shift 30 minutes to the future if the session starts before 14:00
            if converted_time < datetime.strptime("14:00", "%H:%M"):
                converted_time += timedelta(minutes=30)

            delta_minutes = get_duration(cleaned_row["Format"])

            start_time = converted_time.strftime("%H:%M")
            end_time = (converted_time + timedelta(minutes=delta_minutes)).strftime(
                "%H:%M"
            )

            session = {
                "id": (
                    cleaned_row["Session ID"]
                    if cleaned_row["Session ID"]
                    else str(len(sessions) + 1)
                ),
                "title": cleaned_row["Title"],
                "description": cleaned_row["Description"],
                "abstract": cleaned_row["Abstract"],
                "language": cleaned_row["Lenguage CFP"],
                "keywords": [
                    keyword.strip() for keyword in cleaned_row["Keywords"].split(",")
                ],
                "cta": cleaned_row["CTA"],
                "speaker": cleaned_row["Speaker"],
                "speakerImage": "https://example.com/speaker-image.jpg",  # Placeholder image
                "time": {
                    "start": f"new Date('{SESSION_DATE}T{start_time}:00-06:00')",
                    "end": f"new Date('{SESSION_DATE}T{end_time}:00-06:00')",
                },
                "category": cleaned_row["Category"],
                "level": cleaned_row["Level"],
                "room": cleaned_row["Room "].strip(),  # Note the space in 'Room '
            }

            extra_fields = {
                "Speaker location": "speakerLocation",
                "Co-speaker": "coSpeaker",
                "Speaker organization": "speakerCompany",
                "Title (Spanish)": "titleSpanish",
                "Abstract (Spanish)": "abstractSpanish",
                "Description (Spanish)": "descriptionSpanish",
                "Co-speaker location": "coSpeakerLocation",
                "Co-speaker organization": "coSpeakerCompany",
                "Rate URL": "rateUrl",
                "Speaker Photo URL": "speakerPhotoUrl",
                "Co-speaker Photo URL": "coSpeakerPhotoUrl",
                "Speaker LinkedIn": "speakerLinkedIn",
                "Co-speaker LinkedIn": "coSpeakerLinkedIn",
                "Speaker Bio": "speakerBio",
                "Co-speaker Bio": "coSpeakerBio",
            }

            for csv_field, ts_field in extra_fields.items():
                if cleaned_row[csv_field]:
                    session[ts_field] = cleaned_row[csv_field]

            sessions.append(session)

    imports = "\n".join(
        f"import {{ {special_session.icon} }} from '{special_session.import_icon_from}';"
        for special_session in SPECIAL_SESSIONS
        if special_session.import_icon_from
    )

    typescript_content = imports + f"""
import {{Session}} from "@/app/types/session";

const sessions: Session[] = {json.dumps(sessions, indent=4, ensure_ascii=False)};

export default sessions;
"""

    # Replace date strings with actual Date objects
    typescript_content = re.sub(r'"(new Date\([^)]+\))"', r"\1", typescript_content)

    # Replace "icon": "IoFastFoodOutline" with "icon": IoFastFoodOutline
    for special_session in SPECIAL_SESSIONS:
        typescript_content = typescript_content.replace(
            f'"icon": "{special_session.icon}"',
            f'"icon": {special_session.icon}',
        )

    return typescript_content


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <input_csv_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output = csv_to_typescript(input_file)
    print(output)
