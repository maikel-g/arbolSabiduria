/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mini: "370px",
        "3xl": "1920px",
      },
    },
    fontFamily: {
      montse: ["Montserrat", "sans-serif "],
      workSans: ["Work Sans Variable", "sans-serif "],
      playfair: ["Playfair Display Variable", "sans-serif "],
      open: ["open-sans", "sans-serif "],
    },
  },
  plugins: [require("flowbite/plugin")],
};
