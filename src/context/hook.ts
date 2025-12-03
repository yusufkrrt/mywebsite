import { useContext } from 'react';
import type { LanguageContextType, ThemeContextType } from './AppContext';
import { LanguageContext, ThemeContext } from './AppContext';

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within an AppProvider');
  return context;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within an AppProvider');
  return context;
};
