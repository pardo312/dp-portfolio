import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 15px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(-0%)" },
          "100%": {
            transform: "translateX(-34%)",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      "black-ligth": "#292929",
      "black-ligthest": "#3D3D3D",
      "matrix-normal": "#15ff00",
      "matrix-dark": "#006500",
      "matrix-light": "#d1ffcd",
    },
  },
  plugins: [],
};
export default config;
