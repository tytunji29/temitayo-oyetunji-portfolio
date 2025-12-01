export interface Experience {
  company: string;
  role: string;
  //period: string;
  description: string[];
  type: 'Full-time' | 'Contract' | 'Remote' | 'Hybrid';
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  role?: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
}