/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#86AAFD",
        violet: "#B87FE5",
        black: "#000000",
        white: "#FFFFFF",
      },
      screens: {
        tablet: "431px",
        pc: "1025px",
      },
      fontFamily: {
        luciole : ['Luciole'],
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.5s forwards',
      }
    },
  },
  plugins: [],
};
