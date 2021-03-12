module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'eggshell': '#f4f1de',
        'terraCotta': '#e07a5f',
        'independence': '#3d405b',
        'greenSheen': '#81b29a',
        'deepChampagne': '#f2cc8f'
      },
      fontFamily: {
        'sans': ['Lora', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Lora'],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
