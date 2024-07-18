/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        
        gradient: "gradient 8s linear infinite",

        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",

        slide: "slide var(--speed) ease-in-out infinite alternate",

        marquee: "marquee var(--duration) linear infinite",

        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {

        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },

        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },

        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },

        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },

        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
}

