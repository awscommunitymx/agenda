export type Category = 'IA/ML' | 'Operaciones' | 'FinOps';
export type Level = 'Básico' | 'Intermedio' | 'Avanzado';

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
