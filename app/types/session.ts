export type Category = 'FinOps' | 'IA/ML' | 'Operaciones' | 'PrimerosPasos' | 'Serverless' | 'Softskills';
export type Level = 'Advanced' | 'All' | 'Beginner' | 'Intermediate';

export interface Session {
    id: number;
    title: string;
    abstract: string;
    description: string;
    speaker: string;
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
