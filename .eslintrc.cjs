/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict'
      ],
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue']
      }
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/strict',
        '@vue/eslint-config-typescript/recommended'
      ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: './tsconfig.json',
        extraFileExtensions: ['.vue']
      }
    }
  ]
}
