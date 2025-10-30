"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { ThemePalette, ThemeVersion, getTheme, generateCSSVariables } from '@/lib/themes';

interface ThemeContextType {
  theme: ThemePalette;
  version: ThemeVersion;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  version: ThemeVersion;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, version }) => {
  const theme = getTheme(version);
  const cssVariables = generateCSSVariables(theme);

  // Apply CSS variables to the root element
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Cleanup function to remove variables when component unmounts
    return () => {
      Object.keys(cssVariables).forEach((property) => {
        root.style.removeProperty(property);
      });
    };
  }, [cssVariables]);

  return (
    <ThemeContext.Provider value={{ theme, version }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Hook for getting theme colors directly
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme;
};