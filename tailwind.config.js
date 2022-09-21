module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "gra-gray": "#171717",
        "diff-gray": "#788596",
        "laser-yellow": "#FFE81F",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
}
