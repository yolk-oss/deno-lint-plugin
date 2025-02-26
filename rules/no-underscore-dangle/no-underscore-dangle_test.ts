// deno-lint-ignore-file yolk-deno-lint/no-magic-numbers
import { assertEquals } from "jsr:@std/assert";
import myPlugin from "../../main.ts";

Deno.test("should flag variables with leading underscores", () => {
  const code = `
      const _leadingUnderscore = 42;
    `;
  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 1);
  assertEquals(
    diagnostics[0].message,
    "Unexpected dangling underscore in '_leadingUnderscore'."
  );
});

Deno.test("should flag variables with trailing underscores", () => {
  const code = `
      const trailingUnderscore_ = 42;
    `;
  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);
  assertEquals(diagnostics.length, 1);
  assertEquals(
    diagnostics[0].message,
    "Unexpected dangling underscore in 'trailingUnderscore_'."
  );
});

Deno.test("should not flag variables without underscores", () => {
  const code = `
      const noUnderscore = 42;
    `;
  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);
  assertEquals(diagnostics.length, 0);
});
