/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        zinc: { 950: '#09090b' },
        emerald: { 400: '#34d399' }
      },
    },
  },
  plugins: [],
}