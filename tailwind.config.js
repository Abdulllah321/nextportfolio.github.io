/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#3a6073 ", // 240,86,199
      primaryDark: "#2196f3 ", // 80,230,217
    },
    animation: {
      "spin-slow": "spin 20s linear infinite",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
      // => @media (max-width: 479px) { ... }
    },
    boxShadow: {
      shadow:
        "1px 1px #1b1b1b, 2px 2px #1b1b1b, 3px 3px #1b1b1b, 4px 4px #1b1b1b, 5px 5px #1b1b1b, 6px 6px #1b1b1b, 7px 7px #1b1b1b, 8px 8px #1b1b1b, 9px 9px #1b1b1b, 10px 10px #1b1b1b, 12px 12px #1b1b1b, 13px 13px #1b1b1b, 14px 14px #1b1b1b, 15px 15px #1b1b1b, 16px 16px",
      shadowDark:
        "1px 1px #f5f5f5, 2px 2px #f5f5f5, 3px 3px #f5f5f5, 4px 4px #f5f5f5, 5px 5px #f5f5f5, 6px 6px #f5f5f5, 7px 7px #f5f5f5, 8px 8px #f5f5f5, 9px 9px #f5f5f5, 10px 10px #f5f5f5, 12px 12px #f5f5f5, 13px 13px #f5f5f5, 14px 14px #f5f5f5, 15px 15px #f5f5f5, 16px 16px"
    },
  },
  plugins: [],
};
