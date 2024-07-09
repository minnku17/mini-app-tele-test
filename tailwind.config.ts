import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        showTop: {
          "0%": { opacity: 0, transform: "translate(0, 50px)" },
          "100%": { opacity: 1, transform: "translate(0, 0)" },
        },
      },
      animation: {
        showTop: "showTop 0.5s ease-in-out forwards",
        "showTop-01": "showTop 0.1s ease-in-out forwards",
        "showTop-02": "showTop 0.2s ease-in-out forwards",
        "showTop-03": "showTop 0.3s ease-in-out forwards",
        "showTop-04": "showTop 0.4s ease-in-out forwards",
        "showTop-05": "showTop 0.5s ease-in-out forwards",
        "showTop-06": "showTop 0.6s ease-in-out forwards",
        "showTop-07": "showTop 0.7s ease-in-out forwards",
        "showTop-08": "showTop 0.8s ease-in-out forwards",
        "showTop-09": "showTop 0.9s ease-in-out forwards",
        "showTop-1": "showTop 1s ease-in-out forwards",
        "showTop-1.1": "showTop 1.1s ease-in-out forwards",
        "showTop-1.2": "showTop 1.2s ease-in-out forwards",
        "showTop-1.3": "showTop 1.3s ease-in-out forwards",
        "showTop-1.4": "showTop 1.4s ease-in-out forwards",
        "showTop-1.5": "showTop 1.5s ease-in-out forwards",
        "showTop-1.6": "showTop 1.6s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
