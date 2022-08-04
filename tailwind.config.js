module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // calc를 사용할 수 있게 만들어준다.
  mode: "jit",
  theme: {
    extend: {
      colors: {
        england: "#3C185C",
        spain: "#0C519C",
        germany: "#D10614",
        italy: "#024394",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
