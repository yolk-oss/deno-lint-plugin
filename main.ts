import {
  noMagicNumbersRule,
  noUnderscoreDangleRule,
  requireYieldRule,
} from "./rules/index.ts";

export default {
  name: "yolk-deno-lint",
  rules: {
    "no-magic-numbers": noMagicNumbersRule,
    "no-underscore-dangle": noUnderscoreDangleRule,
    "require-yield": requireYieldRule,
  },
} as Deno.lint.Plugin;
