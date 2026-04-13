import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
     plugins: {
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
    },
    rules: {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/no-autofocus": "warn",
    },
  }
]);

export default eslintConfig;
