/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        workSans: ["'Work Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
