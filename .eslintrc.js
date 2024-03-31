module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    },
  },
  rules: {
    'quote-props': [1, 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'global-require': 0,
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {allow: ['arrowFunctions']},
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 'off',
    'no-unused-expressions': [
      'error',
      {allowTernary: true, allowShortCircuit: true},
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unescaped-entities': ['error', {forbid: ['>', '}']}],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts', '.js'],
      },
    ],
  },
};
