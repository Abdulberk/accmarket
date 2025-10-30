// Theme System for AccsMarket
// Centralized color palette management for different design variants

export interface ThemePalette {
  // Primary Colors
  primary: string;
  primaryDark: string;
  primaryLight: string;
  
  // Secondary Colors
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  
  // Accent Colors
  accent: string;
  accentDark: string;
  accentLight: string;
  
  // Background Colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  
  // Text Colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  
  // Gradient Colors
  gradientFrom: string;
  gradientTo: string;
  gradientVia?: string;
  
  // Status Colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Border Colors
  border: string;
  borderLight: string;
  borderDark: string;
}

// V1 Theme - Current Cyan/Blue Theme
export const themeV1: ThemePalette = {
  // Primary Colors (Main brand colors)
  primary: '#072C48',
  primaryDark: '#052A42',
  primaryLight: '#0A3A56',
  
  // Secondary Colors
  secondary: '#2C3E43',
  secondaryDark: '#1F2B2F',
  secondaryLight: '#3F5B6F',
  
  // Accent Colors (Cyan/Blue accents)
  accent: '#39B9EB',
  accentDark: '#2196F3',
  accentLight: '#C7FFFF',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8FAFC',
  backgroundTertiary: '#F1F5F9',
  
  // Text Colors
  textPrimary: '#072C48',
  textSecondary: '#2C3E43',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#06B6D4',
  gradientTo: '#3B82F6',
  gradientVia: '#0EA5E9',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V2 Theme - Purple/Violet Theme
export const themeV2: ThemePalette = {
  // Primary Colors
  primary: '#4C1D95',
  primaryDark: '#3C1A78',
  primaryLight: '#5B21B6',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#8B5CF6',
  accentDark: '#7C3AED',
  accentLight: '#DDD6FE',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#FAFAFA',
  backgroundTertiary: '#F5F5F5',
  
  // Text Colors
  textPrimary: '#4C1D95',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#8B5CF6',
  gradientTo: '#A855F7',
  gradientVia: '#9333EA',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#8B5CF6',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V3 Theme - Green/Emerald Theme
export const themeV3: ThemePalette = {
  // Primary Colors
  primary: '#064E3B',
  primaryDark: '#022C22',
  primaryLight: '#065F46',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#10B981',
  accentDark: '#059669',
  accentLight: '#D1FAE5',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundTertiary: '#F3F4F6',
  
  // Text Colors
  textPrimary: '#064E3B',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#10B981',
  gradientTo: '#059669',
  gradientVia: '#0D9488',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V4 Theme - Orange/Amber Theme
export const themeV4: ThemePalette = {
  // Primary Colors
  primary: '#92400E',
  primaryDark: '#78350F',
  primaryLight: '#B45309',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#F59E0B',
  accentDark: '#D97706',
  accentLight: '#FEF3C7',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#FFFBEB',
  backgroundTertiary: '#FEF3C7',
  
  // Text Colors
  textPrimary: '#92400E',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#F59E0B',
  gradientTo: '#D97706',
  gradientVia: '#FBBF24',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V5 Theme - Rose Gold/Pink - Luxury & Elegance
export const themeV5: ThemePalette = {
  // Primary Colors
  primary: '#881337',
  primaryDark: '#701A2F',
  primaryLight: '#9F1239',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#F43F5E',
  accentDark: '#E11D48',
  accentLight: '#FECDD3',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#FFF7F8',
  backgroundTertiary: '#FEF2F2',
  
  // Text Colors
  textPrimary: '#881337',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#F43F5E',
  gradientTo: '#EC4899',
  gradientVia: '#F472B6',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#F43F5E',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V6 Theme - Midnight Blue/Indigo - Professional & Sophisticated
export const themeV6: ThemePalette = {
  // Primary Colors
  primary: '#1E1B4B',
  primaryDark: '#1A1A3A',
  primaryLight: '#312E81',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#6366F1',
  accentDark: '#4F46E5',
  accentLight: '#C7D2FE',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8FAFC',
  backgroundTertiary: '#F1F5F9',
  
  // Text Colors
  textPrimary: '#1E1B4B',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#6366F1',
  gradientTo: '#8B5CF6',
  gradientVia: '#7C3AED',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#6366F1',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V7 Theme - Charcoal/Lime - Modern & Bold
export const themeV7: ThemePalette = {
  // Primary Colors
  primary: '#374151',
  primaryDark: '#1F2937',
  primaryLight: '#4B5563',
  
  // Secondary Colors
  secondary: '#6B7280',
  secondaryDark: '#4B5563',
  secondaryLight: '#9CA3AF',
  
  // Accent Colors
  accent: '#84CC16',
  accentDark: '#65A30D',
  accentLight: '#D9F99D',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundTertiary: '#F3F4F6',
  
  // Text Colors
  textPrimary: '#374151',
  textSecondary: '#4B5563',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#84CC16',
  gradientTo: '#22C55E',
  gradientVia: '#4ADE80',
  
  // Status Colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// V8 Theme - Ocean Blue/Turquoise - Fresh & Clean
export const themeV8: ThemePalette = {
  // Primary Colors
  primary: '#0C4A6E',
  primaryDark: '#083344',
  primaryLight: '#0369A1',
  
  // Secondary Colors
  secondary: '#374151',
  secondaryDark: '#1F2937',
  secondaryLight: '#4B5563',
  
  // Accent Colors
  accent: '#0EA5E9',
  accentDark: '#0284C7',
  accentLight: '#BAE6FD',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundSecondary: '#F0F9FF',
  backgroundTertiary: '#E0F2FE',
  
  // Text Colors
  textPrimary: '#0C4A6E',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  
  // Gradient Colors
  gradientFrom: '#0EA5E9',
  gradientTo: '#06B6D4',
  gradientVia: '#0891B2',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#0EA5E9',
  
  // Border Colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  borderDark: '#D1D5DB'
};

// Theme Registry
export const themes = {
  v1: themeV1,
  v2: themeV2,
  v3: themeV3,
  v4: themeV4,
  v5: themeV5,
  v6: themeV6,
  v7: themeV7,
  v8: themeV8
} as const;

export type ThemeVersion = keyof typeof themes;

// Theme Hook for Components
export const getTheme = (version: ThemeVersion = 'v1'): ThemePalette => {
  return themes[version];
};

// CSS Variables Generator (for dynamic theming)
export const generateCSSVariables = (theme: ThemePalette): Record<string, string> => {
  return {
    '--color-primary': theme.primary,
    '--color-primary-dark': theme.primaryDark,
    '--color-primary-light': theme.primaryLight,
    '--color-secondary': theme.secondary,
    '--color-secondary-dark': theme.secondaryDark,
    '--color-secondary-light': theme.secondaryLight,
    '--color-accent': theme.accent,
    '--color-accent-dark': theme.accentDark,
    '--color-accent-light': theme.accentLight,
    '--color-background': theme.background,
    '--color-background-secondary': theme.backgroundSecondary,
    '--color-background-tertiary': theme.backgroundTertiary,
    '--color-text-primary': theme.textPrimary,
    '--color-text-secondary': theme.textSecondary,
    '--color-text-muted': theme.textMuted,
    '--color-gradient-from': theme.gradientFrom,
    '--color-gradient-to': theme.gradientTo,
    '--color-gradient-via': theme.gradientVia || theme.gradientFrom,
    '--color-success': theme.success,
    '--color-warning': theme.warning,
    '--color-error': theme.error,
    '--color-info': theme.info,
    '--color-border': theme.border,
    '--color-border-light': theme.borderLight,
    '--color-border-dark': theme.borderDark
  };
};