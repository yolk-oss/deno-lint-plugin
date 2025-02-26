import { noMagicNumbersRule, noUnderscoreDangleRule } from "./rules/index.ts";

export default {
  name: "yolk-deno-lint",
  rules: {
    "no-magic-numbers": noMagicNumbersRule,
    "no-underscore-dangle": noUnderscoreDangleRule,
  },
} as Deno.lint.Plugin;
