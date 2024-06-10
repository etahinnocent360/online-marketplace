/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: [
        "Lato",
        "Poppins",
        "Roboto",
        "system-ui",
        // other fallback fonts
      ],
    },
    colors: {
      primary: {
        50: "#659D43",
        100: "#659D43",
        200: "#659D43",
        300: "#659D43",
        400: "#659D43",
        500: "#659D43",
        600: "#659D43",
        700: "#659D43",
        800: "#659D43",
        900: "#659D43",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
