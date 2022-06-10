module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'webBg': "url('./images/webBg.png')"
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      }
    },
    colors: {
      'gray-0': '#ffffff',
      'gray-1': '#4a4a4a',
      'gray-2': '#363636',
      'gray-3': '#2f2f2f',
      'gray-4': '#212121',
      'gray-5': '#151515',
      'gray-6': '#000000',
    },
  },
  plugins: [],
}
