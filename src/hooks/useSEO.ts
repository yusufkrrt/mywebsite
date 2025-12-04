import { useEffect } from 'react';
import { useLanguage } from '../context/hook';

const SEO_MAP = {
  tr: {
    title: 'HYzon Tech | Özel Web, Mobil ve Yapay Zeka Çözümleri',
    description:
      'HYzon Tech; React, Flutter, Laravel ve yapay zekâ tecrübeleriyle web, mobil, masaüstü ve otonom sistem projeleri geliştirir.',
    keywords:
      'HYzon Tech, özel yazılım ajansı, web geliştirme, mobil uygulama, Flutter, React, Laravel, yapay zeka, Kütahya yazılım',
    locale: 'tr_TR'
  },
  en: {
    title: 'HYzon Tech | Bespoke Web, Mobile & AI Engineering',
    description:
      'HYzon Tech builds performant web, mobile, desktop and AI products with React, Flutter, Laravel and cloud-native stacks.',
    keywords:
      'HYzon Tech, software agency, web development, mobile apps, Flutter, React, Laravel, AI engineering',
    locale: 'en_US'
  }
} as const;

const upsertMeta = (selector: string, attributes: Record<string, string>, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => meta!.setAttribute(key, value));
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const useSEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const seo = SEO_MAP[language];
    document.title = seo.title;
    document.documentElement.lang = language;

    upsertMeta('meta[name="description"]', { name: 'description' }, seo.description);
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, seo.keywords);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, seo.description);
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, seo.locale);
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description);
  }, [language]);
};
