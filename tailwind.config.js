/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#091426",
          "200": "rgba(255, 255, 255, 0.05)",
          "300": "rgba(9, 20, 38, 0.5)",
          "400": "rgba(255, 255, 255, 0.5)",
          "500": "rgba(255, 255, 255, 0.2)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        white: "#fff",
        burlywood: {
          "100": "#e2c987",
          "200": "rgba(226, 201, 135, 0.5)",
        },
        darkkhaki: "#c7af6f",
        lightslategray: "#848992",
        sandybrown: "#f1ac57",
        dimgray: "#707070",
        khaki: "#fcde8f",
      },
      fontFamily: {
        poppins: "Poppins",
        cormorant: "Cormorant",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      base: "16px",
      "13xl": "32px",
      "5xl": "24px",
      "11xl": "30px",
      "37xl": "56px",
      lg: "18px",
      "7xl": "26px",
      "29xl": "48px",
      sm: "14px",
      "55xl": "74px",
      "41xl": "60px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
