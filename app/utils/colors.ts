import {Category, Level} from "@/app/types/session";

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'IA/ML':
            return 'blue';
        case 'Analítica':
            return 'purple';
        case 'Aplicaciones empresariales':
            return 'orange';
        case 'Arquitectura':
            return 'cyan';
        case 'Bases de datos':
            return 'red';
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
        case 'Habilitación del cliente':
            return 'indigo';
        case 'IA generativa':
            return 'blue';
        case 'Internet de las cosas':
            return 'purple';
        case 'Kubernetes':
            return 'orange';
        case 'Migración y modernización':
            return 'cyan';
        case 'Nube híbrida':
            return 'red';
        case 'Operaciones en la nube':
            return 'green';
        case 'Seguridad cumplimiento e identidad':
            return 'teal';
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

