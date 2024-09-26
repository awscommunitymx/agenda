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
export type Category = {' | '.join(f"'{cat}'" for cat in sorted(categories))};
export type Level = {' | '.join(f"'{level}'" for level in sorted(levels))};

export type CFPLanguage = 'Spanish' | 'English';

export interface Session {{
    id: number;
    title: string;
    abstract: string;
    description: string;
    language: CFPLanguage;
    keywords: string[];
    cta: string;
    speaker: string;
    speakerCompany?: string;
    speakerLocation?: string;
    coSpeaker?: string;
    speakerImage: string;
    time: {{
        start: Date;
        end: Date;
    }};
    category: Category;
    level: Level;
    room: string;
}}

export interface SessionCardProps {{
    session: Session;
}}

export interface SessionListProps {{
    sessions: Session[];
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
