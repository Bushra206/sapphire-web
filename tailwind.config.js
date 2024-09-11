/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#179957",
        accentDark: "#184D47",
      },
      container: {
        center: true,
        // padding: "16px 40px",
      },
    },
    screens: {
      iphone: "300px",
      mobile: "480px",
      tablet: "580px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
       xl: "1280px",
       "2xl": "1536px",
    },
  },
  plugins: [],
};
