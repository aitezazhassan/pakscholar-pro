/**
 * Design Tokens for PakScholar Pro
 * World-class design system foundation
 */

export const designTokens = {
  // Color Palette
  colors: {
    // Primary - Emerald (Growth, Success, Pakistan)
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981', // Main
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    
    // Secondary - Teal (Trust, Professionalism)
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6', // Main
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    
    // Accent - Amber (Highlights, CTAs)
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b', // Main
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    
    // Neutrals - Slate (Depth, Sophistication)
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    
    // Semantic Colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      urdu: ['Noto Nastaliq Urdu', 'sans-serif'],
    },
    
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
    },
  },

  // Spacing (4px base unit)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.5rem',     // 8px - buttons, inputs
    md: '0.75rem',    // 12px - cards
    lg: '1rem',       // 16px - sections
    xl: '1.5rem',     // 24px - hero cards
    '2xl': '2rem',    // 32px - large cards
    full: '9999px',   // pills, avatars
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Colored shadows for premium feel
    emerald: '0 10px 30px -5px rgba(16, 185, 129, 0.3)',
    teal: '0 10px 30px -5px rgba(20, 184, 166, 0.3)',
    amber: '0 10px 30px -5px rgba(245, 158, 11, 0.3)',
  },

  // Transitions
  transitions: {
    // Durations
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    
    // Easing functions
    easing: {
      // Standard - Most common
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      
      // Bounce - Playful interactions
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      
      // Smooth - Premium feel
      smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      
      // Sharp - Quick interactions
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  // Z-index layers
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Animation presets
  animations: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideUp: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideDown: {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
  },
};

// Gradient presets
export const gradients = {
  primary: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  secondary: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
  accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  hero: 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #3b82f6 100%)',
  dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  
  // Subject-specific gradients
  generalKnowledge: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
  geography: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  science: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  computer: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  mathematics: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
  english: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  urdu: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
  islamiat: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
};

export default designTokens;
