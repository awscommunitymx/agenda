import {Category, Level} from "@/app/types/session";

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'IA/ML':
            return 'blue';
        case 'Operaciones':
            return 'green';
        case 'FinOps':
            return 'purple';
        case 'PrimerosPasos':
            return 'yellow';
        case 'Serverless':
            return 'red';
        case 'Softskills':
            return 'pink';
    }
}

const getLevelColor = (level: Level): string => {
    switch (level) {
        case 'Beginner':
            return 'green';
        case 'Intermediate':
            return 'yellow';
        case 'Advanced':
            return 'red';
        case "All":
            return 'blue';
    }
}

export {getCategoryColor, getLevelColor};

