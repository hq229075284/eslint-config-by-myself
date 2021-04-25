module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { /* jsx: true */ },
    // debugLevel:true,
    // 用于eslint-config-airbnb-typescript
    // project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  // plugins: [
  //   'vue',
  // ],
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    semi: ['error', 'never'],
    'max-lines': ['error', { max: 600, skipBlankLines: true, skipComments: true }],
    // 'multiline-comment-style': ['error', 'starred-block'],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'object-curly-newline': ['error', { multiline: true, minProperties: 6 }],
    'id-length': ['error', { min: 3, max: 20, exceptions: ['e', 'to', 'from'] }],
    'max-len': ['error', { code: 136, comments: 100 }],
    'no-use-before-define': ['error', { functions: false }],
  },
  overrides: [
    {
      // eslint-disable-nextline
      // https://github.com/typescript-eslint/typescript-eslint/blob/v4.6.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/explicit-module-boundary-types': ['error'] },
    },
  ],
  // // settings参考：https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js
  // settings: {
  //   'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  //   'import/resolver': {
  //     // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
  //     // node: {},
  //     webpack: { config: require.resolve('@vue/cli-service/webpack.config.js') },
  //   },
  // },
}
