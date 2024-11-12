import {Category, Level} from "@/app/types/session";

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'Arquitectura':
            return 'cyan';
        case 'Capacitación y certificación':
            return 'green';
        case 'Computación sin servidor y contenedores':
            return 'teal';
        case 'Conferencia magistral':
            return 'pink';
        case 'DevOps y productividad del desarrollador':
            return 'yellow';
        case 'Habilidades blandas':
            return 'gray';
        case 'Seguridad cumplimiento e identidad':
            return 'teal';
        default:
            return 'gray'; // Color por defecto
    }
}

const getLevelColor = (level: Level): string => {
    switch (level) {
        case "L100":
            return 'blue';
        case 'L200':
            return 'green';
        case 'L300':
            return 'yellow';
        case 'L400':
            return 'red';
    }
}

export {getCategoryColor, getLevelColor};

