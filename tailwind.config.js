/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B19',
          900: '#0A1128',
          800: '#101F42',
          700: '#1A2E5A',
          600: '#253E75',
        },
        brand: {
          blue: '#0066FF',
          accent: '#00D2FF',
          violet: '#6C5CE7',
          cyan: '#00CEC9',
          darkBlue: '#004080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
