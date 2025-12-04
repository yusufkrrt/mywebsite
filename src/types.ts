export type Language = 'tr' | 'en';

export type Theme = 'light' | 'dark' | 'system';

interface ServiceTranslation {
  title: string;
  desc: string;
  details: string[];
  cta: string;
}

export interface PortfolioProject {
  name: string;
  category: string;
  description: string;
  result: string;
  stack: string[];
}

export interface TechBadge {
  name: string;
  category: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  focus: string;
  skills: string[];
}

export interface TeamInsight {
  title: string;
  description: string;
}

export interface TranslationStructure {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    portfolio: string;
    tech: string;
    team: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  services: {
    title: string;
    subtitle: string;
    web: ServiceTranslation;
    mobile: ServiceTranslation;
    desktop: ServiceTranslation;
    custom: ServiceTranslation;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    supportEmail: string;
  };
  footer: {
    rights: string;
    privacy: string;
    privacyDescription: string;
    terms: string;
    termsDescription: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    cta: string;
    projects: PortfolioProject[];
  };
  techStack: {
    title: string;
    subtitle: string;
    badges: TechBadge[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
    insights: TeamInsight[];
  };
}