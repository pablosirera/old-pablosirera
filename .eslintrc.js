module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/typescript'],
  rules: {
    'prettier/prettier': 'error',
    'vue/require-default-prop': 'off'
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
