/**
 * Design Tokens for PakScholar Pro (Apple Inc. Aesthetic)
 * Minimalist, academic, prestigious, and fatigue-free for Pakistani test aspirants.
 */

export const designTokens = {
  colors: {
    // Official Pakistan Academic Forest Green (Apple Midnight Green inspired)
    forestGreen: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#0F5132', // Primary Brand Green
      900: '#0B3D26', // Deep Forest Shade
      950: '#052215',
    },

    // Academic Gold / Brass (For High-Yield & Cutoff badges)
    brass: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309', // High-Yield Brass
      800: '#92400e',
      900: '#78350f',
    },

    // Apple Cupertino Canvas Neutrals
    canvas: {
      light: '#FBFBFD', // Apple system background
      lightSurface: '#FFFFFF',
      lightBorder: 'rgba(0, 0, 0, 0.07)',
      lightSubtle: '#F5F5F7',
      
      dark: '#0A0A0C', // Deep Obsidian
      darkSurface: 'rgba(24, 24, 27, 0.65)',
      darkBorder: 'rgba(255, 255, 255, 0.08)',
      darkSubtle: '#18181B',
    },

    // Text Hierarchy
    text: {
      heading: '#111827',
      body: '#374151',
      muted: '#6B7280',
      lightSubtle: '#9CA3AF',
    },
  },

  // Apple Radii & Squircle curves
  borderRadius: {
    sm: '0.625rem',   // 10px - buttons, small tags
    md: '0.875rem',   // 14px - standard inputs
    lg: '1.25rem',    // 20px - cards
    xl: '1.75rem',    // 28px - hero cards, modals
    full: '9999px',
  },

  // Soft Ambient Elevation (No harsh neon glow)
  shadows: {
    subtle: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
    card: '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
    hover: '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
    elevated: '0 20px 40px -8px rgba(0, 0, 0, 0.12)',
  },
};

export default designTokens;
