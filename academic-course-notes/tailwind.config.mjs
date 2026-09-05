/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        subject: {
          econometrics: '#2563eb',
          trade: '#0d9488',
          business: '#4f46e5',
          accounting: '#059669',
          industrial: '#d97706',
          culture: '#7c3aed',
          settlement: '#0284c7',
          productivity: '#dc2626'
        }
      }
    },
  },
  plugins: [],
}