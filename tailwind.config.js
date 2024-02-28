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
        primary: "#5ae59b",
        highlight: "#182729",
        bgGray: "#161c24",
        colorText: "#ffffff",
        colorW: "#4d61fc",
        inputColor: "#212b36",
        tableBg: "#212b36",
      },
    },
  },
  plugins: [
   
    // Otros plugins...
  ],
};
