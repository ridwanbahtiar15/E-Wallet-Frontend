/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        nutinoSans: ["Nunito Sans"],
      },
      colors: {
        primary: "#2948FF",
        secondary: "#4F5665",
        dark: "#0B132A",
        light: "#FFF",
        danger: "#D00000",
        success: "#1EC15F",
      },
    },
  },
  plugins: [],
};
