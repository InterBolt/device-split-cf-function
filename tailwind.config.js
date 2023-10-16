module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("@tailwindcss/typography"), 
  ]
};
