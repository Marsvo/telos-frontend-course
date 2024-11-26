module.exports = {
  content: [

    "./*.html",
    "./*/*.html",
    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {

      colors: {
        primary: "#fc9003",
      },

      fontSize: {
        h2: ["48px", "64px"],
        h5: ["24px", "32px"],
        lead1: ["18px","32px"],
        body: ["16px", "26px"],


      } 
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}