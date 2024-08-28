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
      colors: {
        "gray-active": "#222222",
        "gray-body": "#333333",
        "gray-label": "#555555",
        "gray-ph": "#888888",
        "gray-line": "#dcdcdc",
        "gray-in": "#f0f0f0",
        "gray-bg": "#f8f8f8",
        "gray-sold": "#fcfcfc",
        "blue-b": "#0038F5",
      },
    },
  },
  plugins: [],
};
export default config;
