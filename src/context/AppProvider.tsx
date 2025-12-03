import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language, Theme } from '../types';
import { TRANSLATIONS } from '../constants';
import { LanguageContext, ThemeContext } from './AppContext';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as Theme;
  return stored || 'system';
};

const getInitialIsDark = (): boolean => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme') as Theme;
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isDark, setIsDark] = useState<boolean>(getInitialIsDark);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const shouldBeDark = theme === 'dark' ? true : theme === 'light' ? false : mediaQuery.matches;
      setIsDark(shouldBeDark);
      root.classList.toggle('dark', shouldBeDark);
      const appliedTheme = theme === 'system' ? (shouldBeDark ? 'dark' : 'light') : theme;
      root.setAttribute('data-theme', appliedTheme);
    };

    applyTheme();

    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }

    return undefined;
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const languageValue = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  const themeValue = {
    theme,
    setTheme,
    isDark,
  };

  return (
    <LanguageContext.Provider value={languageValue}>
      <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
