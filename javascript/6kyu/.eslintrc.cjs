module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-unused-vars": [2, {"args": "after-used", "varsIgnorePattern": "app"}],
  }
};
