import { IoRibbonOutline } from 'react-icons/io5';
import { IoFastFoodOutline } from 'react-icons/io5';
import {Session} from "@/app/types/session";

export const specialEvents: Session[] = [
    {
        "id": "inauguracion",
        "title": "Inauguración",
        "description": "Inauguración del AWS Student Community Day 2024",
        "abstract": "Sesión de inauguración a cargo del Decano",
        "language": "Spanish",
        "keywords": ["inauguración", "bienvenida"],
        "cta": "Inauguración",
        "speaker": "Decano",
        "speakerPhotoUrl": "",
        "time": {
            "start": new Date('2024-11-16T09:00:00-06:00-06:00'),
            "end": new Date('2024-11-16T09:30:00-06:00-06:00')
        },
        "category": "Conferencia magistral",
        "level": "L100",
        "room": "Escenario principal",
        "isSpecial": true,
        "icon": IoRibbonOutline
    },
    {
        id: "CMA101",
        title: "La mentalidad builder: Transformando el mundo, un bit a la vez",
        abstract: "En el vertiginoso mundo de la tecnología, la mentalidad builder no es solo una forma de pensar: es el catalizador que transforma ideas audaces en realidades tangibles. Como builders, no solo escribimos código - damos vida a soluciones que impactan a millones, construimos arquitecturas que escalan globalmente y reimaginamos lo posible en la nube.",
        description: "Esta charla te llevará en un viaje transformador donde descubrirás que ser un builder va más allá de dominar servicios, tecnologías o escribir líneas de código perfectas. Es sobre ver oportunidades donde otros ven obstáculos, sobre atreverse a experimentar con nuevas tecnologías, y sobre la valentía de decir \"yo puedo construir eso\" cuando otros dicen que es imposible.",
        language: "Spanish",
        keywords: [],
        cta: "Descubre cómo transformar tu mentalidad de desarrollador a builder y aprende a crear soluciones que impacten a millones de usuarios",
        speaker: "David Victoria",
        speakerBio: "David Victoria es un experto en tecnologías cloud con múltiples certificaciones de AWS. Como Senior Cloud Architect en Caylent, ayuda a empresas a aprovechar al máximo los servicios de Amazon Web Services. Es AWS Ambassador, líder del AWS User Group Monterrey y profesor en el Tecnológico de Monterrey. Con más de 10 años de experiencia, David combina habilidades técnicas y de liderazgo para diseñar soluciones innovadoras y seguras en la nube. Es un apasionado de compartir conocimientos a través de conferencias y cursos.",
        speakerCompany: "Senior Cloud Architect en Caylent",
        speakerLocation: "Monterrey",
        speakerLinkedIn: "https://www.linkedin.com/in/vikomex/",
        speakerPhotoUrl: "https://img.awscommunity.mx/david.jpg",
        time: {
            start: new Date("2024-11-16T09:45:00-06:00"),
            end: new Date("2024-11-16T10:05:00-06:00")
        },
        category: "Conferencia magistral",
        level: "L100",
        room: "Escenario principal",
    },
    {
        id: "CMA102",
        title: "DevRel at AWS",
        abstract: "An AWS developer relations workshop featuring insights on DevRel strategy, AWS's customer-centric approach, and practical implementations of developer feedback.",
        description: "Join us for an in-depth exploration of Developer Relations at AWS. Learn how AWS's unique 'working backwards' methodology shapes our DevRel strategy, enabling us to transform developer feedback into concrete service improvements. This session will demonstrate the vital role of DevRel in AWS's ecosystem and its impact on product development.",
        abstractSpanish: "Un taller de relaciones con desarrolladores de AWS que presenta información sobre la estrategia de DevRel, el enfoque centrado en el cliente de AWS y las implementaciones prácticas de la retroalimentación de los desarrolladores.",
        descriptionSpanish: "Únete a nosotros para una exploración profunda de las Relaciones con Desarrolladores en AWS. Aprende cómo la metodología única de 'trabajar hacia atrás' de AWS da forma a nuestra estrategia de DevRel, permitiéndonos transformar la retroalimentación de los desarrolladores en mejoras concretas de servicios. Esta sesión demostrará el papel vital de DevRel en el ecosistema de AWS y su impacto en el desarrollo de productos.",
        language: "English",
        keywords: ["DevRel", "AWS"],
        speakerLinkedIn: "https://www.linkedin.com/in/rjourdan/",
        speakerCompany: "Worldwide Head of Developer Relations @ AWS",
        speakerLocation: "San Francisco, CA",
        cta: "Conoce de primera mano cómo AWS trabaja con la comunidad de desarrolladores y cómo puedes ser parte de esta transformación",
        speaker: "Romain Jourdan",
        speakerPhotoUrl: "https://img.awscommunity.mx/romain.jpg",
        speakerBio: "Romain (Román in Spanish) is a full-time husband, dad, and geek. With 20 years of working experience, he has had several hats from R&D engineer in automotive, to application performance consultant, pre-sales, and technical evangelism. He is currently leading World Wide Developer Relations at AWS, and exploring the future of software development with GenAI.",
        time: {
            start: new Date("2024-11-16T09:30:00-06:00"),
            end: new Date("2024-11-16T09:45:00-06:00")
        },
        category: "Conferencia magistral",
        level: "L100",
        room: "Escenario principal",
    },
    {
        "id": "comida-sala1",
        "title": "Comida",
        "description": "Pausa para comida",
        "abstract": "Hora de la comida",
        "language": "Spanish",
        "keywords": ["comida", "break"],
        "cta": "Comer",
        "speaker": "",
        "speakerPhotoUrl": "",
        "time": {
            "start": new Date('2024-11-16T13:00:00-06:00-06:00'),
            "end": new Date('2024-11-16T14:00:00-06:00-06:00')
        },
        "category": "Conferencia magistral",
        "level": "L100",
        "room": "Lobby",
        "isSpecial": true,
        "icon": IoFastFoodOutline
    },
    {
        "id": "clausura-sala1",
        "title": "Cierre",
        "description": "Sesión de cierre del evento",
        "abstract": "Cierre del evento",
        "language": "Spanish",
        "keywords": ["cierre", "clausura"],
        "cta": "Clausura",
        "speaker": "Cierre",
        "speakerPhotoUrl": "",
        "time": {
            "start": new Date('2024-11-16T15:50:00-06:00-06:00'),
            "end": new Date('2024-11-16T16:50:00-06:00-06:00')
        },
        "category": "Conferencia magistral",
        "level": "L100",
        "room": "Escenario principal",
        "isSpecial": true,
        "icon": IoRibbonOutline
    },
    // Resume review by Tech Mahindra
    {
        id: "CMA103",
        title: "Resume review by Tech Mahindra",
        abstract: "Resume review by Tech Mahindra",
        description: "Acompañanos en el stand de Tech Mahindra para una revisión de tu CV",
        language: "Spanish",
        keywords: ["CV", "resumen"],
        speaker: "Tech Mahindra",
        speakerPhotoUrl: "",
        cta: "",
        time: {
            start: new Date("2024-11-16T12:00:00-06:00"),
            end: new Date("2024-11-16T15:00:00-06:00")
        },
        category: "Conferencia magistral",
        level: "L100",
        room: "Lobby",
        isSpecial: true,
        icon: IoRibbonOutline
    },
    // Mentoring Hub
    {
        id: "CMA104",
        title: "Mentoring Hub",
        abstract: "Mentoring Hub",
        description: "Quieres una mentoría por parte de expertos? Acompañanos en el stand de Mentoring Hub",
        language: "Spanish",
        keywords: ["mentoría", "mentoring"],
        speaker: "Mentoring Hub",
        speakerPhotoUrl: "",
        cta: "",
        time: {
            start: new Date("2024-11-16T10:00:00-06:00"),
            end: new Date("2024-11-16T15:00:00-06:00")
        },
        category: "Conferencia magistral",
        level: "L100",
        room: "Lobby",
        isSpecial: true,
        icon: IoRibbonOutline
    },
];

const sessions: Session[] = [
    {
        id: "ARQ101",
        title: "Historia de supervivencia: Tu app se hace viral",
        abstract: "Una idea sencilla se hace viral sin esperarlo, se sale de tu control y tienes dos opciones: renunciar o hacer todo lo posible para que sobreviva.",
        description: "Una historia de supervivencia de 72 horas de una idea que se hizo viral y estuvo a punto de ser un desastre.",
        language: "Spanish",
        keywords: ["viral", "escalabilidad", "supervivencia"],
        cta: "Aprende estrategias reales de escalabilidad y manejo de crisis cuando tu aplicación se vuelve viral inesperadamente",
        speaker: "Adan Luna Contreras",
        speakerPhotoUrl: "https://img.awscommunity.mx/adan.jpeg",
        speakerBio: "Programando y diseñando desde los inicios de los websites, he vivido todas las etapas y crecimiento del desarrollo web. Desde Pascal hasta Flutter sigo apasionado por seguir  aprendiendo y evolucionando junto a esta maravilloso modo de vida.",
        speakerCompany: "Fundador",
        speakerLocation: "Monterrey",
        speakerLinkedIn: "https://www.linkedin.com/in/adanluna/",
        time: {
            start: new Date("2024-11-16T10:15:00-06:00"),
            end: new Date("2024-11-16T11:00:00-06:00")
        },
        category: "Arquitectura",
        level: "L100",
        room: "Sala 1"
    },
    {
        id: "ARQ102",
        title: "¡El final de la nube! La historia de FinOps y otras metodologías para iniciar en la nube. Implementación en AWS",
        abstract: "En 2023 se hizo popular la repatriación de la nube, que ha implicado un adiós a cloud. La respuesta entre mantenerse o abandonar es FinOps y otras metodologías de trabajo.",
        description: "El objetivo de esta charla es mostrar una introducción a estrategias recomendadas para aplicar las mejores prácticas en la implementación de recursos y servicios en AWS a través de casos de uso e implementación",
        language: "Spanish",
        keywords: ["FinOps", "metodologías", "AWS", "optimización"],
        cta: "Descubre cómo implementar FinOps para optimizar tus costos en la nube y tomar decisiones informadas sobre tu infraestructura",
        speaker: "Barbara Guadalupe Gaspar Gaona",
        speakerPhotoUrl: "https://img.awscommunity.mx/barbara.JPG",
        speakerBio: "Especialista de nube con más de 5 años de experiencia liderando proyectos de migración y optimización cloud para proyectos en México y América Latina. Miembro activa de la FinOps Foundation en México certificada. Ganadora de la Presea Jóvenes con Valores y del Premio Daniel Cosío Villegas.",
        speakerLinkedIn: "https://www.linkedin.com/in/barbaragaspargaona/",
        speakerCompany: "Cloud Specialist",
        speakerLocation: "Guerrero, México",
        time: {
            start: new Date("2024-11-16T11:10:00-06:00"),
            end: new Date("2024-11-16T11:55:00-06:00")
        },
        category: "Arquitectura",
        level: "L100",
        room: "Sala 1"
    },
    {
        id: "DEVOPS101",
        title: "De Hello World a Producción: La realidad del DevOps",
        abstract: "Exploraremos la evolución en DevOps y SRE, desde los primeros pasos hasta proyectos de infraestructura a gran escala.",
        description: "Abordaremos las habilidades clave, las herramientas indispensables y el impacto de nuestras decisiones en sistemas escalables, recorriendo las fases de crecimiento en una carrera de DevOps",
        language: "Spanish",
        keywords: ["DevOps", "SRE", "escalabilidad"],
        cta: "Obtén una visión realista y práctica de la evolución profesional en DevOps, desde los fundamentos hasta proyectos enterprise",
        speaker: "Arturo Gallart",
        speakerPhotoUrl: "https://img.awscommunity.mx/tato.jpeg",
        speakerBio: "DevOps Tech Lead con 10+ años de experiencia en TI, enfocado en la integración de herramientas de DevOps para proyectos de migración, automatización y administración de entornos de nube",
        speakerCompany: "DevOps Tech Lead en SoftServe",
        speakerLocation: "Saltillo",
        speakerLinkedIn: "https://www.linkedin.com/in/agallart/",
        time: {
            start: new Date("2024-11-16T12:05:00-06:00"),
            end: new Date("2024-11-16T12:50:00-06:00")
        },
        category: "DevOps y productividad del desarrollador",
        level: "L100",
        room: "Sala 1"
    },
    {
        id: "SOFT101",
        title: "Soft skills para desarrollar una carrera sólida en la Nube",
        abstract: "Descubre cómo es que los soft skills, como la comunicación y colaboración, potencian el éxito en proyectos de la nube.",
        description: "Aprende técnicas clave para trabajar en equipo, resolver conflictos y prepararte para roles en tecnología.",
        language: "Spanish",
        keywords: ["soft skills", "comunicación", "desarrollo profesional"],
        cta: "Potencia tu carrera técnica desarrollando las habilidades blandas esenciales que te distinguirán en la industria cloud",
        speaker: "Marco Alejandro Cornejo Bracamontes",
        speakerCompany: "Engineering Manager en Caylent",
        speakerLocation: "Mexicali, BCN",
        speakerPhotoUrl: "https://img.awscommunity.mx/marco.jpg",
        speakerBio: "Marco Cornejo es Engineering Manager en Caylent, una consultora Premier Partner de AWS, donde lidera equipos y proyectos enfocados en migración a la nube y modernización de aplicaciones. Con más de 10 años de experiencia en la industria del software, Marco posee certificaciones avanzadas en AWS y se ha especializado en diseñar soluciones escalables y seguras en la nube.",
        speakerLinkedIn: "https://www.linkedin.com/in/marco-cornejo/",
        time: {
            start: new Date("2024-11-16T14:00:00-06:00"),
            end: new Date("2024-11-16T14:30:00-06:00")
        },
        category: "Habilidades blandas",
        level: "L100",
        room: "Sala 1"
    },
    {
        id: "SEC101",
        title: "Cuando la Nube Tiembla: Respuesta a Incidentes en AWS",
        abstract: "Soluciones y servicios que se pueden adoptar en la nube para llevar a cabo una recuperación de desastres exitosa en AWS.",
        description: "Soluciones y servicios que se pueden adoptar en la nube para llevar a cabo una recuperación de desastres exitosa en AWS.",
        language: "Spanish",
        keywords: ["incidentes", "recuperación", "desastres", "AWS"],
        cta: "Aprende estrategias probadas para manejar incidentes y recuperarte de desastres en entornos AWS",
        speaker: "Kevin Arquieta Arévalo",
        speakerCompany: "Senior Cyber Security Engineer en Luxoft",
        speakerLocation: "Monterrey, NLE",
        speakerPhotoUrl: "https://img.awscommunity.mx/kevin.png",
        speakerBio: "Lic. en Seguridad en Tecnologías de Información. He trabajado como Desarrollador, Ingeniero de Seguridad e Ingeniero de nube. Cuento con 4 certificaciones de AWS, entre ellas Solutions Architect Pro y Security Specialty. Actualmente trabajo en Luxoft como Senior Cyber Security Engineer para una fintech de Londres.",
        speakerLinkedIn: "https://www.linkedin.com/in/kevinarquieta/",
        time: {
            start: new Date("2024-11-16T14:40:00-06:00"),
            end: new Date("2024-11-16T15:25:00-06:00")
        },
        category: "Seguridad cumplimiento e identidad",
        level: "L100",
        room: "Sala 1"
    },
    {
        id: "DEVOPS102",
        title: "Usando AWS para compilar Linux",
        abstract: "En la presentación hablare de como con herramientas open source, crear una granja de compilacion con instancias y poder acelerar nuestro tiempo de compilacion.",
        description: "En la presentación hablare de como con herramientas open source, crear una granja de compilacion con instancias y poder acelerar nuestro tiempo de compilacion.",
        language: "Spanish",
        keywords: ["Linux", "compilación", "AWS"],
        cta: "Descubre cómo aprovechar AWS para optimizar y acelerar tus procesos de compilación de Linux",
        speaker: "Ramon Esparza",
        speakerCompany: "Senior Site Reliability Engineer en Wizeline",
        speakerLocation: "Chihuahua, CHH",
        speakerPhotoUrl: "https://img.awscommunity.mx/ramon.jpg",
        speakerBio: "Ramon es Site Reliability Engineer con experiencia en AWS, CI/CD y servidores. Bastante bueno en desarrollo de pipeline de CI/CD. Ramon tiene un gran interés en inteligencia artificial y por alguna razon le gusta correr linux en PCs de recursos limitados.",
        speakerLinkedIn: "https://www.linkedin.com/in/ramonesparza/",
        time: {
            start: new Date("2024-11-16T10:15:00-06:00"),
            end: new Date("2024-11-16T11:00:00-06:00")
        },
        category: "DevOps y productividad del desarrollador",
        level: "L100",
        room: "Sala 2"
    },
    {
        id: "CERT101",
        title: "Obstáculos superados para alcanzar el nivel 'senior' en la nube",
        abstract: "La charla explora la trayectoria y evolución detallando los retos y aprendizajes que llevan a ocupar un puesto 'senior' en el área.",
        description: "Charla honesta y personal sobre cómo romper barreras y superar obstáculos en un campo dominado por ciertos estereotipos y expectativas",
        language: "Spanish",
        keywords: ["carrera", "desarrollo profesional", "senior"],
        cta: "Conoce la experiencia real y los desafíos superados en el camino hacia convertirte en un profesional senior de la nube",
        speaker: "Magnolia Barbara Sandoval Romero",
        speakerCompany: "Cloud Engineer en Western Governors University",
        speakerLocation: "Tijuana, BCN",
        speakerPhotoUrl: "https://img.awscommunity.mx/magnolia.jpg",
        speakerBio: "Ingeniera de Nube apasionada por la innovación, con 4 certificaciones AWS que avalan su profundo conocimiento. Destaca por su capacidad para liderar proyectos complejos y construir comunidades tecnológicas. Actualmente trabaja para Western Governors University, ella comparte su experiencia como speaker en eventos en Mexico y Guatemala.",
        speakerLinkedIn: "https://www.linkedin.com/in/magnolia-sandoval-cloud-aws/",
        time: {
            start: new Date("2024-11-16T11:10:00-06:00"),
            end: new Date("2024-11-16T11:55:00-06:00")
        },
        category: "Capacitación y certificación",
        level: "L100",
        room: "Sala 2"
    },
    {
        id: "SLS101",
        title: "Crea tu app de Día de Muertos en la nube",
        abstract: "En esta sesión, aprenderás a crear una aplicación full-stack de Día de Muertos en la nube.",
        description: "Aprenderemos a usar AWS en nuestras aplicaciones de manera simplificada y crearemos calaveritas literarias para nuestras mascotas con la ayuda de Gen AI.",
        language: "Spanish",
        keywords: ["full-stack", "AWS", "Gen AI"],
        cta: "Aprende a construir aplicaciones full-stack en la nube mientras explores la integración con tecnologías de IA generativa",
        speaker: "Ana Cunha",
        speakerCompany: "Developer Advocate en AWS",
        speakerLocation: "Brasil",
        speakerPhotoUrl: "https://img.awscommunity.mx/anacunha.jpg",
        speakerBio: "Ana Cunha es Developer Advocate en AWS para América Latina. Anteriormente, trabajó como ingeniera de desarrollo de software en Amazon.com",
        speakerLinkedIn: "https://www.linkedin.com/in/analuizacunha/",
        time: {
            start: new Date("2024-11-16T12:05:00-06:00"),
            end: new Date("2024-11-16T12:50:00-06:00")
        },
        category: "Computación sin servidor y contenedores",
        level: "L100",
        room: "Sala 2"
    },
    {
        id: "SEC102",
        title: "Atacando y defendiendo AWS",
        abstract: "La charla tratará algunos errores de seguridad comunes que pueden ser fatales, además de mostrar servicios de AWS que pueden ayudar a prevenir brechas de seguridad.",
        description: "La charla tratará algunos errores de seguridad comunes que pueden ser fatales, además de mostrar servicios de AWS que pueden ayudar a prevenir brechas de seguridad.",
        language: "Spanish",
        keywords: ["seguridad", "AWS", "brechas", "defensa"],
        cta: "Fortalece la seguridad de tus aplicaciones entendiendo vectores de ataque comunes y estrategias de defensa en AWS",
        speaker: "Manuel Perez",
        coSpeakerCompany: "AppSec Engineer",
        speakerLocation: "Tamaulipas",
        speakerPhotoUrl: "https://img.awscommunity.mx/manuel.jpg",
        speakerBio: "Ingeniero en AppSec con más de 20 certificaciones y experiencia en auditorías de seguridad para infraestructuras, aplicaciones web y móviles, con un gran interés en la seguridad en la nube.",
        speakerLinkedIn: "https://www.linkedin.com/in/manuel-perez-069985245/",
        time: {
            start: new Date("2024-11-16T14:00:00-06:00"),
            end: new Date("2024-11-16T14:45:00-06:00")
        },
        category: "Seguridad cumplimiento e identidad",
        level: "L100",
        room: "Sala 2"
    },
    {
        id: "DEVOPS103",
        title: "AWS y DevOps: Tu Puente entre la Universidad y el Mundo Laboral",
        abstract: "Cuando escuchamos, Deploya en la Nube, Que significa deployar en la nube?, usar IaC para levantar infraestructura, como son las CI/CD pipelines para levantar infraestructura",
        description: "Cuando escuchamos, Deploya en la Nube, Que significa deployar en la nube?, usar IaC para levantar infraestructura, como son las CI/CD pipelines para levantar infraestructura",
        language: "Spanish",
        keywords: ["DevOps", "AWS", "CI/CD", "IaC"],
        cta: "Comprende cómo aplicar los conceptos de DevOps en el mundo real y prepárate para tu primera experiencia profesional",
        speaker: "Ricardo Javier Vasquez Mota",
        speakerPhotoUrl: "https://img.awscommunity.mx/ricardo.JPEG",
        speakerBio: "Lead DevOps engineer con mas de 7 años de experiencia manejando, automatizando y optimizando infraestructura en la nube, manejando distintos tipos de arquitectura y tomando roles como: cloud developer, ingeniero de infraestructura, ingeniero Devops.",
        speakerCompany: "Lead Systems engineer en Epam",
        speakerLinkedIn: "https://www.linkedin.com/in/ricardo-vasquez-0060b0a8/",
        speakerLocation: "Venezuela",
        time: {
            start: new Date("2024-11-16T14:55:00-06:00"),
            end: new Date("2024-11-16T15:40:00-06:00")
        },
        category: "DevOps y productividad del desarrollador",
        level: "L100",
        room: "Sala 2"
    },
];

const allSessions = [...specialEvents, ...sessions];

export default allSessions;

