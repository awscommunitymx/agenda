import {Category, Level} from "@/app/types/session";

const getCategoryColor = (category: Category): string => {
    switch (category) {
        case 'IA/ML':
            return 'blue';
        case 'Operaciones':
            return 'green';
        case 'FinOps':
            return 'purple';
    }
}

const getLevelColor = (level: Level): string => {
    switch (level) {
        case 'Básico':
            return 'green';
        case 'Intermedio':
            return 'blue';
        case 'Avanzado':
            return 'purple';
    }
}

export {getCategoryColor, getLevelColor};

