import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        'custom-2':'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        'custom-dark': '1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)'
      },
      transitionProperty: {
        'dark': 'all',
      },
      transitionTimingFunction: {
        'dark': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      
    },
  },
  plugins: [],
}
export default config
