/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(6px)", opacity: "0" },
          "76%": { transform: "translateY(-6px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "scroll-down": "scrollDown 2s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["default", "light"],
  },
};
