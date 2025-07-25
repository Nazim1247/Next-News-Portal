import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Custom rules block for all TS/TSX files
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Disallow explicit any usage
      "@typescript-eslint/no-explicit-any": "error",

      // Warn about unused vars but ignore variables starting with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
    },
  },
];

export default eslintConfig;
