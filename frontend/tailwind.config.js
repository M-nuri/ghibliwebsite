/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (Dark Navy Blue from Ghibli logo)
        primary: {
          50: '#E8EEF2',
          100: '#D1DCE5',
          200: '#A3B9CB',
          300: '#7596B1',
          400: '#517389',
          500: '#2D4A5E',
          600: '#243C4D',
          700: '#1B2D3A',
          800: '#121F27',
          900: '#091014',
          950: '#04080A',
        },
        // Secondary Colors (Coral/Red-Orange from Ghibli logo)
        secondary: {
          50: '#FEEEEC',
          100: '#FDDCD8',
          200: '#FBB9B1',
          300: '#F9968A',
          400: '#F77363',
          500: '#F15A4A',
          600: '#E63D2B',
          700: '#C42E1E',
          800: '#9C2518',
          900: '#741B12',
          950: '#4C120C',
        },
        // Accent Colors (Complementary teal/green)
        accent: {
          50: '#E6F4F4',
          100: '#CCE9E9',
          200: '#99D3D3',
          300: '#66BDBD',
          400: '#33A7A7',
          500: '#008B8B',
          600: '#006F6F',
          700: '#005353',
          800: '#003838',
          900: '#001C1C',
          950: '#000E0E',
        },
        // Neutral Colors
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#121212',
        },
        // Success, Warning, Error
        success: {
          50: '#E8F5E9',
          500: '#4CAF50',
          700: '#388E3C',
        },
        warning: {
          50: '#FFF3E0',
          500: '#FF9800',
          700: '#F57C00',
        },
        error: {
          50: '#FFEBEE',
          500: '#F44336',
          700: '#D32F2F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Tajawal', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(241, 90, 74, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(241, 90, 74, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
        'gradient-primary': 'linear-gradient(135deg, #2D4A5E 0%, #1B2D3A 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F15A4A 0%, #F77363 100%)',
        'gradient-accent': 'linear-gradient(135deg, #008B8B 0%, #006F6F 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2D4A5E 0%, #121F27 100%)',
        'gradient-hero': 'linear-gradient(135deg, #2D4A5E 0%, #243C4D 50%, #1B2D3A 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
        'xl': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
        '2xl': '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow-primary': '0 0 30px rgba(45, 74, 94, 0.4)',
        'glow-secondary': '0 0 30px rgba(241, 90, 74, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
