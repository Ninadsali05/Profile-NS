export type Tab = 'home' | 'about' | 'projects' | 'contact';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
