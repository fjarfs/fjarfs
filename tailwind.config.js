module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  safelist: [
    'opacity-100',
    'translate-y-0',
    'opacity-0',
    'pointer-events-none',
    'translate-y-3',
    'hidden',
    'active',
    'text-ink-muted',
    'grayscale',
    'grayscale-0'
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: '#090a0f',
        surface: {
          DEFAULT: '#11141c',
          subtle: '#151924',
          elevated: '#1a202e',
          hover: '#1e2434',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
        },
        ink: {
          primary: '#f3f5f9',
          secondary: '#9aa3b6',
          muted: '#626b80',
          faint: '#3f4657',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#60a5fa',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        emerald: {
          DEFAULT: '#10b981',
          subtle: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.28)',
        },
        amber: {
          DEFAULT: '#f59e0b',
          subtle: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.28)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          subtle: 'rgba(6, 182, 212, 0.12)',
          border: 'rgba(6, 182, 212, 0.28)',
        }
      }
    }
  }
};
