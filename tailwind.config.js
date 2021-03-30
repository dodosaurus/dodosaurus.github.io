module.exports = {
  purge: ["./src/components/*.js"],
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
    }
  },
  variants: {
    rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['hover']
  },
  plugins: [],
}
}