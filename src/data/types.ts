export type ProjectTier = 'major' | 'featured' | 'minor' | 'placeholder';

export interface ProjectStat {
  label: string;
  value: string;
}

export interface CaseStudy {
  problem: string[];
  approach: string;
  architecture?: string;
  implemented: string[];
  planned?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  tier: ProjectTier;
  summary: string;
  technologies: string[];
  dataset?: string;
  stats?: ProjectStat[];
  caseStudy?: CaseStudy;
  results?: string[];
  future?: string[];
  github?: string;
  live?: string;
  docs?: string;
  note?: string;
  image?: string;
}

export type ToolkitMeta = 'Technical' | 'Analytical' | 'Creative' | 'Business';

export interface SkillGroup {
  label: string;
  meta: ToolkitMeta;
  skills: string[];
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface EntrepreneurshipArea {
  label: string;
  items: string[];
}

export interface CapabilityTile {
  title: string;
  description: string;
  tags: string[];
  note?: string;
}

export interface Achievement {
  title: string;
  placement: string;
  event: string;
  college: string;
  researchTitle: string;
  date: string;
  certificateUrl?: string;
  projectUrl?: string;
  description: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  resumePath: string;
  location?: string;
}
