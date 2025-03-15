/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite", // Add marquee animation
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)", // Start outside of screen
          },
          "100%": {
            transform: "translateX(-100%)", // Move to the left completely
          },
        },
      },
    },
  },
  plugins: [],
}
