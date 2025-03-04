/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "background-1": "var(--background1)",
        "background-2": "var(--background2)",
        "background-3": "var(--background3)",
        "background-4": "var(--background4)",
        "background-5": "var(--background5)",
        "background-inactive": "var(--backgroundInactive)",
        "background-inverse": "var(--backgroundInverse)",
        "background-input": "var(--backgroundInput)",
        "action-primary": "var(--actionPrimaryBackground)",
        "action-primary-hover": "var(--actionPrimaryBackgroundHover)",
        "action-secondary": "var(--actionSecondaryBackground)",
        "action-secondary-hover": "var(--actionSecondaryBackgroundHover)",
        yellow: "var(--yellowBackground)",
        "yellow-hover": "var(--yellowBackgroundHover)",
        red: "var(--redBackground)",
        "red-hover": "var(--redBackgroundHover)",
      },
      textColor: {
        "action-primary": "var(--actionPrimaryText)",
        "action-primary-hover": "var(--actionPrimaryTextHover)",
        "action-secondary": "var(--actionSecondaryText)",
        "action-secondary-hover": "var(--actionSecondaryTextHover)",
        "text-1": "var(--text1)",
        "text-2": "var(--text2)",
        "text-3": "var(--text3)",
        "text-inactive": "var(--textInactive)",
        "text-inverse": "var(--textInverse)",
        "blue-text": "var(--blueText)",
        "yellow-text": "var(--yellowText)",
        "red-text": "var(--redText)",
      },
      borderColor: {
        "border-1": "var(--border1)",
        "border-2": "var(--border2)",
        "border-3": "var(--border3)",
        "blue-border": "var(--blueBorder)",
        "yellow-border": "var(--yellowBorder)",
        "red-border": "var(--redBorder)",
      },
      colors: {
        "blue-icon": "var(--blueIcon)",
        "red-icon": "var(--redIcon)",
        "yellow-icon": "var(--yellowIcon)",
      },
      boxShadow: {
        "action-colored": "var(--boxShadows-action-colored)",
        "action-secondary": "var(--boxShadows-action-secondary)",
        "boxShadow-input-inner": "var(--boxShadows-input-inner)",
        "boxShadows-menu": "var(--boxShadows-menu)",
        "input-inner-shadow": "var(--input-inner-shadow)",
        "menu-shadow": "var(--menu-shadow)",
      },
      fontFamily: {
        inter: ["var(--font-stack)"],
      },
      fontSize: {
        small: "var(--font-size-small)",
        large: "var(--font-size-large)",
      },
    },
  },
  plugins: [],
};
