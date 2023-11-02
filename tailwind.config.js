/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        nunito: "'Nunito Sans', sans-serif",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
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
