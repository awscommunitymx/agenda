import codecs
import csv
import sys
from typing import Set


def clean_string(s: str) -> str:
    return s.strip()


def get_unique_values(csv_file: str, column: str) -> Set[str]:
    unique_values = set()
    with codecs.open(csv_file, "r", "utf-8-sig") as file:
        reader = csv.DictReader(file)
        for row in reader:
            value = clean_string(row[column])
            if value:
                unique_values.add(value)
    return unique_values


def generate_typescript_interfaces(csv_file: str) -> str:
    categories = get_unique_values(csv_file, "Category")
    levels = get_unique_values(csv_file, "Level")

    typescript_content = f"""
import {{IconType}} from "react-icons";

export type Category = {' | '.join(f"'{cat}'" for cat in sorted(categories))};
export type Level = {' | '.join(f"'{level}'" for level in sorted(levels))};

export type CFPLanguage = 'Spanish' | 'English';

export interface Session {{
    id: string;
    title: string;
    abstract: string;
    description: string;
    titleSpanish?: string;
    abstractSpanish?: string;
    descriptionSpanish?: string;
    language: CFPLanguage;
    keywords: string[];
    cta: string;
    speaker: string;
    speakerPhotoUrl?: string;
    speakerLinkedIn?: string;
    speakerCompany?: string;
    speakerLocation?: string;
    speakerBio?: string;
    coSpeaker?: string;
    coSpeakerPhotoUrl?: string;
    coSpeakerLinkedIn?: string;
    coSpeakerCompany?: string;
    coSpeakerLocation?: string;
    coSpeakerBio?: string;
    speakerImage: string;
    time: {{
        start: Date;
        end: Date;
    }};
    category: Category;
    level: Level;
    room: string;
    rateUrl?: string;
    isSpecial?: boolean;
    icon?: IconType;
}}

export interface SessionCardProps {{
    session: Session;
}}

export interface SessionListProps {{
    sessions: Session[];
    inAgendaPage: boolean;
}}
"""
    return typescript_content.strip()


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python interface_generator.py <input_csv_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output = generate_typescript_interfaces(input_file)
    print(output)
