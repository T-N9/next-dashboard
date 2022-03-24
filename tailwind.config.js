module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'bungee' : ['Bungee', 'cursive']
      },
      colors : {
        'primary' : '#304F5B',
        'secondary' : '#F58626'
      },
      dropShadow: {
        'tn' : '0px 0px 5px #304f5b'
      }
    },
  },
  plugins: [],
}
