/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*/*.{jsx,js}", "./src/components/*.jsx"],
  theme: {
    extend: {
      colors: {
        "cust-black": "#242424",
      },
    },
  },
  plugins: [],
};
