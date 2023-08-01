/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      "grey-div": "#393535",
      "grey-button": "#D9D9D9"
      },
      borderRadius: {
        "main-div": "35px 15px",
        "mobile-form": "15px"
      },
      boxShadow: {
        "mobile-shadow" : "-1.5px -2px 2px 0px rgba(174, 227, 120, 0.90) inset",
        "form-mobile": "2px 3px 2px 0px rgba(57, 53, 53, 0.90)"
      },
      width: {
        "mobile-width": "300px"
      },
      height: {
        "mobile-height": "149px"
      }
    },
  },
  plugins: [],
}

