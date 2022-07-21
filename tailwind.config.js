module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/header.png')",
        'bg': "url('./src/assets/bg.png')",
      },
      fontFamily: {
        'sans': ['Nanum Gothic'],
      }
    },
  },
  plugins: [],
}
