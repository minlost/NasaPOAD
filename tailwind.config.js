/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "under-poad": "rgba(0,0,0,0.84049369747899154)",
      },

      screens: {
        lg: { max: "900px" },
        sm: { max: "750px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
