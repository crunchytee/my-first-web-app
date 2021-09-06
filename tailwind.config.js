module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "white",
      button: "#00B2CA",
    }),
    extend: {
      textColor: {
        button: "#00B2CA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
