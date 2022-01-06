module.exports = {
  content: ['./build/index.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'back-image': "url('/img/background.jpg)",
      }),
      fontFamily: {
        body: ['Lato']
      },
      fontSize:{
        vs: ['0.5rem', { lineHeight: '0.75rem' }],

      },
    },
  },
  plugins: [],
}
