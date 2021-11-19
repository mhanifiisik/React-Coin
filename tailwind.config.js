module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-beige": "#CE9294",
        "regal-dark": "#0c0032",

        "regal-whitee": "#F7F5DD",
        "regal-green": "#96a825",
        "regal-segreen": "#A1A75A",
        "regal-blue": "#0c0032",
        "regal-bluee": "#190061",
        "regal-blueee": "#240090",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
