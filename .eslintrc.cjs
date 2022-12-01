/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "@vue/eslint-config-typescript/recommended"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
