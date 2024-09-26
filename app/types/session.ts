export type Category = 'FinOps' | 'IA/ML' | 'Operaciones' | 'PrimerosPasos' | 'Serverless' | 'Softskills';
export type Level = 'Advanced' | 'All' | 'Beginner' | 'Intermediate';

export type CFPLanguage = 'Spanish' | 'English';

export interface Session {
    id: string;
    title: string;
    abstract: string;
    description: string;
    descriptionSpanish?: string;
    language: CFPLanguage;
    keywords: string[];
    cta: string;
    speaker: string;
    speakerCompany?: string;
    speakerLocation?: string;
    coSpeaker?: string;
    coSpeakerCompany?: string;
    coSpeakerLocation?: string;
    speakerImage: string;
    time: {
        start: Date;
        end: Date;
    };
    category: Category;
    level: Level;
    room: string;
    rateUrl?: string;
}

export interface SessionCardProps {
    session: Session;
}

export interface SessionListProps {
    sessions: Session[];
}
