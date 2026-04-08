/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azulhorizonte': {
          DEFAULT: '#3467b0',
          alt: '#4585c6',
          60: '#86a4d0',
          40: '#aec3e0'
        },
        'verdevitalidad': {
          DEFAULT: '#86b545',
          light: '#a5d470'
        },
        gray600: '#7a7a7a',
        gray400: '#b5b5b5'
      }
    },
  },
  plugins: [],
}
