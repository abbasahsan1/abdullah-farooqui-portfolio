import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "ABDULLAH FAROOQUI",
  contact: {
    email: "Email Not Listed", // Placeholder as specific email was not visible in source text
    phone: "+92 345 5885144",
    location: "Islamabad, Pakistan",
    linkedin: "LinkedIn Profile", // Placeholder as specific URL was not visible in source text
    github: "Github Profile"      // Placeholder as specific URL was not visible in source text
  },
  summary: "AI-Focused Software Engineer specializing in backend engineering. Experience includes RAG architectures, autonomous workflows, and Python-based AI centric services. Focused on engineering production-ready AI systems that integrate advanced models with enterprise workflows.",
  experience: [
    {
      company: "Atomglobal",
      role: "Associate Software Engineer",
      period: "July 2025 – Present",
      location: "Islamabad, Pakistan",
      description: [
        "Engineered cross-platform AI agents leveraging Node.js and Python for sophisticated browser automation.",
        "Designed system-level orchestration layers for browser-state detection and precise UI targeting.",
        "Developed low-latency multimodal pipelines by integrating Whisper STT and LLM APIs with Playwright.",
        "Worked on enterprise-grade document intelligence platforms (DocSense AI) and NLP-focused analysis tools."
      ],
      tech: ["Node.js", "Python", "Playwright", "Whisper STT", "LLM APIs"]
    },
    {
      company: "Emergsol Technologies",
      role: "Junior App Developer",
      period: "July 2024 – Nov 2024",
      location: "Islamabad, Pakistan",
      description: [
        "Developed multiple production-ready Android applications including Expense Tracker, Task Manager, Inventory App, and Attendance App.",
        "Implemented SQLite and Room databases, notifications, CRUD operations, and Material Design-based UIs.",
        "Optimized apps for reliability, offline/local storage, and smooth performance for daily operational workflows.",
        "Applied best practices in modular architecture, lifecycle management, and asynchronous operations."
      ],
      tech: ["Kotlin", "Android SDK", "SQLite", "Room", "Material Design"]
    }
  ],
  projects: [
    {
      name: "Jarvis AI Automation System",
      tagline: "Voice-Controlled Agent",
      description: "Engineered a cross-platform AI agent for autonomous multi-step navigation and automated media control. Designed a system-level orchestration layer for browser-state detection and precise UI targeting. Integrated Whisper STT and LLM APIs for real-time voice-to-action execution.",
      tech: ["Node.js", "Python", "Playwright", "Whisper STT", "LLM APIs"]
    },
    {
      name: "DocSense AI",
      tagline: "RAG based Monitoring System",
      description: "Built an enterprise-grade document intelligence platform supporting automated ingestion and querying at scale. Implemented a hybrid chunking strategy (semantic, overlapping, sliding window) and high-performance vector search pipelines using ChromaDB with local embedding storage and BGE embeddings.",
      tech: ["RAG", "ChromaDB", "BGE Embeddings", "Python"]
    },
    {
      name: "NLP-Focused Resume Analyzer",
      tagline: "AI-Powered Parsing Pipeline",
      description: "Developed a pipeline to parse documents, extract skills, and score candidates using RAG-based keyword matching. Integrated entity extraction models for structured assessments and conducted prototype testing in Streamlit.",
      tech: ["NLP", "RAG", "Streamlit", "Python"]
    },
    {
      name: "J7 Emporium / Excel Marketing",
      tagline: "Real Estate Platforms",
      description: "Designed and developed high-performance websites with responsive layouts and dynamic content rendering. Built with Next.js and TypeScript, implementing scalable component architecture and lazy loading for performance optimization. Deployed on Vercel.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel"]
    },
    {
      name: "Travel Planner App (FYP)",
      tagline: "Android Travel Assistant",
      description: "Developed a Kotlin-based Android app for personalized trip planning and budget tracking. Integrated LocationIQ maps for route planning and Firebase for offline storage and data synchronization. Designed role-based interfaces for admins, organizers, and customers.",
      tech: ["Kotlin", "Android SDK", "LocationIQ", "Firebase"]
    },
    {
      name: "Bioscout - Margalla Animal ID",
      tagline: "AI Wildlife Identification",
      description: "Developed an AI-powered platform for identifying animals using Hugging Face datasets and Google Vision API. Integrated Gemini API for detailed species information and Firebase Authentication for user access. Built an interactive interface in Next.js.",
      tech: ["Next.js", "Google Vision API", "Gemini API", "Hugging Face", "Firebase"]
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "Kotlin", "JavaScript", "TypeScript"] },
    { category: "Infrastructure", items: ["Docker", "CI/CD", "Vercel", "Playwright"] },
    { category: "Backend", items: ["Node.js", "Firebase", "SQLite", "Room", "ChromaDB"] },
    { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "Android SDK", "Streamlit"] },
    { category: "AI/ML", items: ["Hugging Face", "OpenAI APIs", "Whisper STT", "RAG", "BGE Embeddings", "Google Vision API", "Gemini API"] }
  ],
  education: [
    {
      institution: "Capital University of Science & Technology",
      degree: "Bachelors of Computer Science",
      year: "Graduated July 2025",
      details: ["Islamabad, Pakistan"]
    }
  ]
};