module.exports = {
  content: [

    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {
      

      colors: {
        primary: "#8C30F5",
      },

      fontFamily: {
        sans: "Inter",
      },
   
    

      fontSize: {
        h2: ["48px", "64px"],
        h5: ["24px", "32px"],
        lead1: ["18px","32px"],
        sub2: ["18px","28px"],
        body: ["16px", "26px"],
        body2: ["14px", "24px"],


      } 
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}