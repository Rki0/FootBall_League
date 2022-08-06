module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // calc를 사용할 수 있게 만들어준다.
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "england-500": "#3C185C",
        "england-200": "rgba(60,24,92,0.2)",
        "spain-500": "#0C519C",
        "spain-200": "rgba(12,81,156,0.2)",
        "germany-500": "#D10614",
        "germany-200": "rgba(209,6,20,0.2)",
        "italy-500": "#024394",
        "italy-200": "rgba(2,67,148,0.2)",
      },
      keyframes: {
        intro: {
          from: { transform: "rotateY(0deg) scale(2.0)" },
          to: { transform: "rotateY(360deg) scale(1.0)" },
        },
      },
      animation: {
        intro: "intro 2s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
