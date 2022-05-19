module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
    },
    extends: [
      '@nuxtjs',
      'plugin:nuxt/recommended',
      'eslint:recommended',
      'prettier',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
      'no-await-in-loop': 'error',
      'no-promise-executor-return': 'error',
      'require-atomic-updates': 'error',
      'max-nested-callbacks': ['error', 3],
      'no-return-await': 'error',
    },
  }