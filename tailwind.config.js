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
        darkEgo: "#414141",
        greyEgo: "#ebebeb",
        orangeEgo: "#FAA603",
        skyblueEgo: "#4E9D9A",
      },
      spacing: { "2000px": "300px", "1500px": "1000px" },
    },
    plugins: [],
  },
};
