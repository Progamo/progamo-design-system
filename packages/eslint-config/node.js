module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  "plugins": [ "@typescript-eslint", "prettier", "unused-imports" ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        semi: false,
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ]
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
