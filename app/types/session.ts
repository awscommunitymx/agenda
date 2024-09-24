export interface Session {
    id: number;
    title: string;
    description: string;
    speaker: string;
    speakerImage: string;
    time: string;
    track: 'Technical' | 'Non-Technical';
    room: string;
}

export interface SessionCardProps {
    session: Session;
}

export interface SessionListProps {
    sessions: Session[];
}