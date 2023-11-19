const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "530px",
        "xs-down": { max: "530px" },
        sm: "641px",
        "sm-down": { max: "640px" },
        md: "769px",
        "md-down": { max: "768px" },
        lg: "1025px",
        "lg-down": { max: "1024px" },
        xl: "1281px",
        "xl-down": { max: "1280px" },
        "2xl": "1921px",
        "2xl-down": { max: "1920px" },
      },
      colors: {
        body: {
          DEFAULT: "#444",
          light: "#777",
        },
        accent: {
          DEFAULT: "#be1c11",
          light: "#fdbf2c",
        },
        error: "#fb0000",
        success: "#55f72d",
        warning: "#fb9928",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
