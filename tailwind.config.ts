import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
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
      }
    }
  },
  plugins: []
};

export default config;
