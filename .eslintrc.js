module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "linebreak-style": "off",
    "no-plusplus": "off",
    "no-useless-escape": "off",
    "no-unused-expressions": "off",
    "max-len": "off",
    // "max-len": ["error", { ignoreComments: true }],
    "import/extensions": [0, { js: "always" }],
  },
};
