module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'eggshell': '#f4f1de',
        'eggshell-text': '#9A8C32',
        'terracotta': '#e07a5f',
        'terracotta-light': '#F5D5CC',
        'independence': '#3d405b',
        'independence-text': '#A9ACC6',
        'arrow-blue': '#2196f3',
        'greensheen': '#81b29a',
        'greensheen-light': '#D9E8E1',
        'deepchampagne': '#f2cc8f',
        'deepchampagne-text': '#A46D13',
        'dino-green': '#98db7c',
        'dino-yellow': '#ffe55a',
      },
      spacing: {
        '100': '25rem',
    },
    backgroundImage: theme => ({
      'chlebiatko-bg': "url('/src/prep/images/chlebiatko-title.PNG')",
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}