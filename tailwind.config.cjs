/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "table-banner": "url('/public/images/table-banner.png')",
        "refferral": "url('/public/images/refferral.png')",
        "statistics": "url('/public/images/statistics.png')",
        "modal": "url('/public/images/modal.png')"
      }
    },
  },
  plugins: [],
})
