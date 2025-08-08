module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        jest: true,
      },
    },
    {
      // JavaScript files should use standard ESLint, not TypeScript rules
      files: ["**/*.js"],
      parser: "espree",
      rules: {
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
    },
    {
      // Example and demo files can be more permissive
      files: ["**/example.ts", "**/example.tsx", "**/demo.ts", "**/demo.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
};
