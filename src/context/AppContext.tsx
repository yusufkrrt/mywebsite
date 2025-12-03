import { createContext } from 'react';
import type { Language, Theme, TranslationStructure } from '../types';

// --- Language Context ---
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// --- Theme Context ---
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
