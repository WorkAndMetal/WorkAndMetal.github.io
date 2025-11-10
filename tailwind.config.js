const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          50: "#f3f7ff",
          100: "#e4edff",
          200: "#c6d8ff",
          300: "#98b7ff",
          400: "#6891ff",
          500: "#3f6df2",
          600: "#2e52d6",
          700: "#2540a8",
          800: "#1f357f",
          900: "#1d2f65"
        }
      },
      boxShadow: {
        card: "0 24px 60px -40px rgba(19, 28, 62, 0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "48px 48px"
      }
    }
  },
  plugins: []
};
