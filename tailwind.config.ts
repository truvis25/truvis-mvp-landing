import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#023059',
        azure: '#0A7EE8',
        'brand-cyan': '#05AFF2',
        midnight: '#0D1B2E',
        'brand-teal': '#0C6E8A',
        charcoal: '#1C1C1E',
        ice: '#EBF4FA',
        stripe: '#F7F9FC',
        'tech-tint': '#E5F3FD',
        divider: '#D0D5DD',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
