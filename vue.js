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
    'plugin:vue/essential',
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
    'id-length': ['error', { min: 4, max: 20, properties: 'never', exceptionPatterns: ['[x-z]'] }],
  },
  overrides: [
    {
      // https://github.com/typescript-eslint/typescript-eslint/blob/v4.6.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/explicit-module-boundary-types': ['error'] },
    },
  ],
}
