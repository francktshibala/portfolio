/** @type {import('eslint').Linter.Config} */
const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];

export default eslintConfig;
