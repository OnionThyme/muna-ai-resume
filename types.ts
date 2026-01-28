
export interface Project {
  id: string;
  title: string;
  company: string;
  client?: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlights: string[];
  fullStory: {
    challenge: string;
    action: string;
    technicalDetail: string;
    result: string;
  };
}

export interface SkillCategory {
  category: 'Strong' | 'Moderate' | 'Gaps';
  title: string;
  description: string;
  skills: {
    name: string;
    note: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
