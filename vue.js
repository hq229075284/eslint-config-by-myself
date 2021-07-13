/* eslint-disable max-len */
/* eslint-disable id-length */
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

  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    // http://eslint.cn/docs/rules/#stylistic-issues
    'array-bracket-newline': ['error', { multiline: true }],
    'array-element-newline': ['error', 'consistent'],
    'consistent-return': 'off',
    'id-length': [
      'error',
      {
        min: 3,
        max: 40,
        exceptions: ['d', 'dd', 'e', 'fn', 'from', 'h', 'i', 'id', 'j', 'k', 'MB', 'ol', 'on', 'to', 'ua', 'UA', 'v', 'x', 'y'],
      },
    ],
    'max-len': ['error', { code: 148, comments: 100 }],
    'max-lines': ['error', { max: 600, skipBlankLines: true, skipComments: true }],
    'no-console': 'warn',
    'no-use-before-define': ['error', { functions: false }],
    'object-curly-newline': ['error', { minProperties: 6, multiline: true }],
    'operator-linebreak': ['error', 'after', { overrides: { ':': 'before', '?': 'before' } }],
    semi: ['error', 'never'],
    // 'multiline-comment-style': ['error', 'starred-block'],

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        vue: 'never',
        ts: 'never',
        tsx: 'never',
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    // 全局用@typescript-eslint/indent，不用indent
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md#how-to-use
    indent: 'off',
    // https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/style.js#L130
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        ignoreComments: false,
      },
    ],
  },
  overrides: [
    {
      // https://github.com/typescript-eslint/typescript-eslint/blob/v4.6.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md#rule-details
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
      },
    },
    // 目前仅对vue文件进行Prettier格式化，用以支持render中JSX的格式化
    {
      files: ['*.jsx.vue'],
      // https://github.com/prettier/eslint-plugin-prettier
      // eslint-plugin-prettier v3.4.0 通过eslint可视化展示prettier结果
      plugins: ['prettier'],
      // https://github.com/prettier/eslint-config-prettier/tree/v8.3.0
      // eslint-config-prettier 关闭prettier和eslint冲突的规则
      extends: ['prettier'],
      rules: {
        // https://github.com/prettier/eslint-plugin-prettier#installation
        'prettier/prettier': 'warn',
      },
    },
  ],
  // 以下在项目中配置
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
