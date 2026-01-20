export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech?: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: {
    institution: string;
    degree: string;
    year: string;
    details: string[];
  }[];
}