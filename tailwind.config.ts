import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
      '22': '5.5rem',
      '21': '5.25rem',
      '38' : '9.5rem',
      '37' : '9.25rem',
      '39' : '9.80rem',
      '45' : '11.25rem',
      '44.5' : '11.05rem',
      '43' : '10.75rem',
      },
    },
  },
  plugins: [],
}
export default config
