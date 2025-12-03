export type Language = 'tr' | 'en';

export type Theme = 'light' | 'dark' | 'system';

export interface TranslationStructure {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
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
    web: {
      title: string;
      desc: string;
    };
    mobile: {
      title: string;
      desc: string;
    };
    desktop: {
      title: string;
      desc: string;
    };
    custom: {
      title: string;
      desc: string;
    };
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
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}