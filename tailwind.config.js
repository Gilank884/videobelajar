/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        mytheme: {
          "primary": "#3b82f6",           // Blue
          "secondary": "#f59e0b",         // Amber
          "accent": "#10b981",            // Emerald
          "neutral": "#374151",           // Gray
          "base-100": "#ffffff",          // White background
          "base-200": "#f3f4f6",          // Light gray
          "base-300": "#e5e7eb",          // Medium gray
          "info": "#0ea5e9",              // Sky blue
          "success": "#22c55e",           // Green
          "warning": "#f59e0b",           // Amber
          "error": "#ef4444",             // Red
        },
      },
    ],
  },
}