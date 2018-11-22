module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['flow', 'import'],
  env: { node: true },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        'import/prefer-default-export': 'off',
        'max-len': 'off',
      },
    },
    {
      files: ['*.test.js'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
