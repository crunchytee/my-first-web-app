module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "white",
      header: "#00B2CA",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
