module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbarColor: {
          DEFAULT: "#333545",
          100: "#f84464",
        },
        signupButton: {
          DEFAULT: "#F84464",
        },
        premierBackground : {
          DEFAULT : "#2B3148",
        },
      },

      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
