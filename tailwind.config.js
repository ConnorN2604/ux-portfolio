/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
    // add this
    corePlugins: {
      scrollBehavior: true,
    },
  }
  