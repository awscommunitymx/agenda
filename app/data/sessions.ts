import {Session} from "@/app/types/session";

const sessions: Session[] = [
    {
        id: 1,
        title: "Streamline Kubernetes Management with AI: Unlocking the Power of K8sGPT",
        description: "In this session, we'll explore how K8sGPT, an innovative AI-powered tool, revolutionizes Kubernetes management by automating complex tasks like troubleshooting, root cause analysis, and performance optimization. Whether you're a seasoned DevOps professional or new to Kubernetes, this talk will demonstrate how K8sGPT can simplify your operations, reduce downtime, and enhance the overall efficiency of managing cloud-native applications. We'll dive into real-world scenarios, showing how K8sGPT identifies and resolves issues quickly, helping you focus on scaling and developing your applications with confidence. Join us to discover how AI is transforming the way we manage Kubernetes clusters.",
        abstract: "AI-powered tool that simplifies Kubernetes management. It automates troubleshooting, performs root cause analysis, and provides actionable insights within your environment. Ideal for DevOps experts and beginners alike, K8sGPT saves time and reduces the complexity of cloud-native operations.",
        speaker: "Alonso Parasxidis Moreno",
        speakerImage: "https://example.com/jane-doe.jpg",
        time: {
            start: new Date('2024-09-23T09:00:00'),
            end: new Date('2024-09-23T10:30:00')
        },
        category: "IA/ML",
        level: "Intermedio",
        room: "Poliforum"
    },
    {
        id: 2,
        title: "From Data to Melodies: Machine Learning in Music",
        description: "En los últimos años, el Machine Learning ha logrado avances significativos en el campo de la creación musical, permitiendo el desarrollo de algoritmos que pueden generar melodías, armonías e incluso canciones completas. Esta charla explorará la intersección entre el machine learning y la música, enfocándose en cómo los datos pueden utilizarse para crear composiciones originales de melodías cortas. Discutiremos los desafíos de utilizar machine learning para la creación musical, incluyendo temas relacionados con la recolección de datos, el entrenamiento de modelos y la evaluación. También exploraremos algunos de los enfoques más prometedores para usar machine learning en la música, como las técnicas de Redes Generativas Antagónicas (GAN) y el deep learning. Tendremos una demostración en vivo utilizando AWS DeepComposer. Al final de esta charla, los asistentes tendrán una mejor comprensión de cómo el machine learning puede utilizarse para crear melodías y las emocionantes posibilidades que este campo emergente tiene por delante.",
        abstract: "Descubre la unión entre Machine Learning y la creación de melodías. Aprende cómo los datos pueden generar composiciones originales, junto con los desafíos y enfoques prometedores utilizando Redes Generativas Antagónicas (GAN). Explora las posibilidades y experimentemos juntos con AWS DeepComposer.",
        speaker: "César Martinez",
        speakerImage: "https://example.com/john-smith.jpg",
        time: {
            start: new Date('2024-09-23T11:00:00'),
            end: new Date('2024-09-23T12:30:00')
        },
        category: "IA/ML",
        level: "Básico",
        room: "Poliforum"
    },
    {
        id: 3,
        title: "Desarrollo con IA generativa en AWS con PartyRock, Amazon Bedrock y Amazon Q",
        abstract: "Esta charla es para desarrolladores que estén listos para aprender sobre la genAI en AWS. Desarrollar aplicaciones con PartyRock y Bedrock, uso de modelos fundacionales, cómo “conversar con sus documentos” a través de bases de conocimiento y usar Amazon Q Developer para ayudar en la codificación.",
        description: "Esta charla está diseñado para desarrolladores que estén listos para aprender sobre la IA generativa en AWS. Aprenderá a desarrollar aplicaciones con PartyRock y Amazon Bedrock. Se centrará en habilidades prácticas como la ingeniería rápida y el uso de diferentes modelos fundamentales. También exploraremos cómo “conversar con sus documentos” a través de bases de conocimiento, generación aumentada de recuperación (RAG), incrustaciones y agentes. Además, descubrirá cómo usar Amazon Q Developer para ayudar en la codificación y la depuración.",
        speaker: "Ana Barragán",
        speakerImage: "https://example.com/jane-doe.jpg",
        time: {
            start: new Date('2024-09-23T13:00:00'),
            end: new Date('2024-09-23T14:30:00')
        },
        category: "Operaciones",
        level: "Intermedio",
        room: "Aula Panamericana"
    }
];

export default sessions;