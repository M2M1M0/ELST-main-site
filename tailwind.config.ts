import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /*
         * body, modal, drawer background & ring-offset-color
         */
        background: colors.white,

        /*
         * body text color
         */
        foreground: colors.gray[600],

        /*
         * border, default flat bg color for input components, tab & dropdown hover color
         */
        muted: colors.gray[200],

        /*
         * primary colors
         */
        primary: {
          lighter: "#a03a43",
          DEFAULT: "#a03a43 ",
          dark: colors.gray[950],
          foreground: colors.white,
        },

        /*
         * secondary colors
         */
        secondary: {
          lighter: "#8c6533",
          DEFAULT: "#8c6533",
          dark: colors.indigo[700],
          foreground: colors.white,
        },

        /*
         * danger colors
         */
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },

        black: {
          DEFAULT: "#333333"
        },
        white: {
          DEFAULT: "#F8F8F8"
        },
        /*
         * warning colors
         */
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
         * info colors
         */
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
         * success colors
         */
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        public: ["var(--font-public)"],
        landsans: ["var(--font-landsans)"],
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },

      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },

      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
