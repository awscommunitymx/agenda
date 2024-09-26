export type Category = 'FinOps' | 'IA/ML' | 'Operaciones' | 'PrimerosPasos' | 'Serverless' | 'Softskills';
export type Level = 'Advanced' | 'All' | 'Beginner' | 'Intermediate';

export type CFPLanguage = 'Spanish' | 'English';

export interface Session {
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
    time: {
        start: Date;
        end: Date;
    };
    category: Category;
    level: Level;
    room: string;
}

export interface SessionCardProps {
    session: Session;
}

export interface SessionListProps {
    sessions: Session[];
}
