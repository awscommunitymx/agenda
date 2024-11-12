import {IconType} from "react-icons";

// export type Category = 'Analítica' | 'Aplicaciones empresariales' | 'Arquitectura' | 'Bases de datos' | 'Capacitación y certificación' | 'Computación sin servidor y contenedores' | 'Conferencia magistral' | 'DevOps y productividad del desarrollador' | 'Habilidades blandas' | 'Habilitación del cliente' | 'IA generativa' | 'IA/ML' | 'Internet de las cosas' | 'Kubernetes' | 'Migración y modernización' | 'Nube híbrida' | 'Operaciones en la nube' | 'Seguridad cumplimiento e identidad';
export type Category = 
  | 'Conferencia magistral'  // Para la inauguración y cierre
  | 'DevOps y productividad del desarrollador' 
  | 'Computación sin servidor y contenedores'
  | 'Seguridad cumplimiento e identidad'
  | 'Arquitectura'
  | 'Habilidades blandas'
  | 'Capacitación y certificación';
export type Level = 'L100' | 'L200' | 'L300' | 'L400';

export type CFPLanguage = 'Spanish' | 'English';

export interface Session {
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
    time: {
        start: Date;
        end: Date;
    };
    category: Category;
    level: Level;
    room: string;
    rateUrl?: string;
    isSpecial?: boolean;
    icon?: IconType;
}

export interface SessionCardProps {
    session: Session;
}

export interface SessionListProps {
    sessions: Session[];
    inAgendaPage: boolean;
}
