import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1B4B66",

          secondary: "#626262",

          accent: "#639599",

          neutral: "#B6B6B6",

          "base-100": "#FFFFFF",
          bright: "#FFFFFF",
          dark: "#13101E",

          info: "#13101E",
          low: "#",
          high: "#171520",
          "gray-100": "#F1F1F1",

          success: "#F1F1F1",

          warning: "#FF8C4B",

          error: "#B00020",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
