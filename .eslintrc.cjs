module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier", "unused-imports", "import", "react"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "quotes": ["error", "double"],
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/self-closing-comp": "warn",
    "no-duplicate-imports": "warn",
    "import/newline-after-import": ["error", {
      "count": 1
    }],
    "import/order": ["warn", {"groups": ["builtin", "external", "internal","parent", "sibling", "index"]}],
    "lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ]
  }
};
