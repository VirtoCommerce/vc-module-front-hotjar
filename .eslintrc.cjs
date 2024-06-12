/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended", // See rules: https://eslint.org/docs/latest/rules/
    "plugin:@typescript-eslint/recommended-type-checked", // See rules: https://typescript-eslint.io/rules/
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "import",
    "@typescript-eslint",
  ],
  rules: {
    /**
     * Errors
     */
    "@typescript-eslint/no-shadow": "error",
    "curly": "error",
    "import/no-unresolved": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    /**
     * Warnings
     */
    "@typescript-eslint/consistent-type-imports": ["warn", { disallowTypeAnnotations: false }],
    "@typescript-eslint/naming-convention": [
      "warn",
      { selector: "interface", format: ["PascalCase"], prefix: ["I"] },
      { selector: "typeAlias", format: ["PascalCase"], suffix: ["Type"] },
    ],
    "@typescript-eslint/no-floating-promises": "warn", // TODO: Switch to error
    "@typescript-eslint/no-misused-promises": [
      "warn",
      {
        "checksVoidReturn": {
          "arguments": false,
        }
      }
    ], // TODO: Switch to error
    "@typescript-eslint/no-unsafe-argument": "warn", // TODO: Switch to error
    "@typescript-eslint/no-unsafe-assignment": "warn", // TODO: Switch to error
    "@typescript-eslint/no-unsafe-call": "warn", // TODO: Switch to error
    "@typescript-eslint/no-unsafe-enum-comparison": "warn", // TODO: Switch to error
    "@typescript-eslint/no-unsafe-member-access": "warn", // TODO: Switch to error
    "@typescript-eslint/no-unsafe-return": "warn", // TODO: Switch to error
    "import/consistent-type-specifier-style": "warn",
    "import/no-cycle": "warn", // TODO: Switch to error
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type"],
        alphabetize: { order: "asc", orderImportKind: "asc" },
        "newlines-between": "never",
      },
    ],
    "no-console": "warn",

    /**
     * Disabled
     */
    "@typescript-eslint/no-non-null-assertion": "off", // TODO: Remove (switch to error) after XAPI types refactoring
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // TODO: Remove (switch to error) at next PR with auto fix
    "@typescript-eslint/no-redundant-type-constituents": "off", // TODO: Investigate why there are false positives
    "@typescript-eslint/unbound-method": "off", // TODO: Investigate why there are false positives
  },
  overrides: [
    {
      files: ["*.ts"],
      excludedFiles: ["./*.js", "./*.ts"],
      rules: {
        "no-restricted-exports": [
          "warn",
          {
            "restrictDefaultExports": {
              direct: true,
              named: true,
              defaultFrom: true,
              namedFrom: true,
              namespaceFrom: true,
            }
          }
        ],
      }
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
      node: true,
    },
  }
};
