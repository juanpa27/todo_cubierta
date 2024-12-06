/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF0000",
          "primary-focus": "#D10000",
          "primary-content": "#ffffff",
          
          "secondary": "#000000",
          "secondary-focus": "#1a1a1a",
          "secondary-content": "#ffffff",
          
          "accent": "#666666",
          "accent-focus": "#999999",
          "accent-content": "#ffffff",
          
          "neutral": "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f2f2f2",
          "base-content": "#1f2937",
          
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
        dark: {
          "primary": "#FF0000",
          "primary-focus": "#FF3333",
          "primary-content": "#ffffff",
          
          "secondary": "#ffffff",
          "secondary-focus": "#e5e5e5",
          "secondary-content": "#000000",
          
          "accent": "#999999",
          "accent-focus": "#666666",
          "accent-content": "#ffffff",
          
          "neutral": "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          
          "base-100": "#1f2937",
          "base-200": "#1a1e2c",
          "base-300": "#141821",
          "base-content": "#ffffff",
          
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
      },
    ],
  },
};