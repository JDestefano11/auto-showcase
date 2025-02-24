import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': {
          DEFAULT: '#2B59FF', // Bold blue - main brand color
          dark: '#1E3EBF',    // Darker blue for hover states
          light: '#4D75FF'    // Lighter blue for accents
        },
        // Secondary colors
        'secondary': {
          DEFAULT: '#1A1A1A', // Rich black for text and headers
          light: '#666666',   // Gray for secondary text
          lighter: '#E5E5E5'  // Light gray for backgrounds
        },
        // Accent colors
        'accent': {
          red: '#FF3B30',     // Sports car red
          silver: '#F2F2F2',  // Metallic silver
          gold: '#FFD700',    // Luxury gold
        },
        // UI colors
        'success': '#34C759', // Green for success states
        'warning': '#FF9500', // Orange for warnings
        'error': '#FF3B30',   // Red for errors
        'background': {
          DEFAULT: '#FFFFFF', // White background
          dark: '#F7F7F7',    // Slightly darker background
          card: '#FFFFFF'     // Card background
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      borderRadius: {
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
