module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ad3946",
        secondary: "#166521"
      },

      fontSize: {
        h1: ["70px","48px"],
        h2: ["48px","64px"],
        lead1: ["18px","32px"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}