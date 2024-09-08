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
        // "noise": "url('./assets/images/noise-background.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": {
          "1": "#262526",
          "2": "#F2F2F0",
          "3": "#D9D8D7",
          "4":"#737272",
          "5":"#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
