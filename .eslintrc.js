module.exports = {
  parser: "babel-eslint",
  extends: "airbnb-base",
  plugins: ["flow", "import"],
  env: { node: true },
  overrides: [
    {
      files: ["src/**/*.js"],
      rules: {
        "import/prefer-default-export": "off"
      }
    },
    {
      files: ["*.test.js"],
      rules: {
        "global-require": "off"
      }
    }
  ]
};
