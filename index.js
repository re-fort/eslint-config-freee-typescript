module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  rules: {
    'no-console': 'warn',
    camelcase: 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'property',
        format: ['camelCase', 'snake_case']
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    'react/prop-types': 'off', // @see https://github.com/yannickcr/eslint-plugin-react/issues/2353
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    'import/resolver': { typescript: {} },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    react: { version: 'detect' }
  }
};
