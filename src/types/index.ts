// Core profile types
export interface ProfileData {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
  contact: ContactInfo;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  interests: string[];
  currentFocus: string;
  hobbies: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
  description?: string;
  url?: string;
  institutionLogo?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  companyUrl?: string;
  companyLogo?: string;
  current?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  date: string;
  venue: string;
  venueShort?: string;
  abstract: string;
  tags: string[];
  featured: boolean;
  image?: string;
  links: PublicationLink[];
}

export interface PublicationLink {
  type: 'pdf' | 'code' | 'dataset' | 'video' | 'slides' | 'poster' | 'arxiv' | 'doi';
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  date: string;
  tags: string[];
  image?: string;
  links: ProjectLink[];
  category: string;
  featured?: boolean;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'report' | 'slides' | 'video' | 'external';
  url: string;
  label?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

// Theme types
export interface ThemeConfig {
  palette: {
    primary: string;
    secondary: string;
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
  spacing: number;
  borderRadius: number;
}

// Component props
export interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}
