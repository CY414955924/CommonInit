module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "eslint-disable-next-line": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "no-undef": "off",
    "vue/no-parsing-error": "off",
    "prettier/prettier": "off",
    "vue/require-v-for-key": "off",
    // 'quotes': [1, 'single']
    "prettier/prettier": ["error", { "singleQuote": true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
