import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const artifactIgnores = [
  ".claude/**",
  ".sync-conflict-*",
  "**/*.sync-conflict-*",
  "coverage/**",
  "logs/**",
  "playwright-report/**",
  "temp/**",
  "test-results/**",
  "tmp/**",
  "*.log",
  "**/*.log",
  "*.tmp",
  "**/*.tmp",
];

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      ...artifactIgnores,
    ],
  },
];

export default eslintConfig;
