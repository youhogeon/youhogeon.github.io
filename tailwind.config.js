module.exports = {
  content: [
    "./public/index.html",
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
      },
      transitionProperty: {
        'size': 'width, height, margin, padding, border-radius, opacity',
      }
    },
  },
  plugins: [],
}
