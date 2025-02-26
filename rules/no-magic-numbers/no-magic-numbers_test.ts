import { assertEquals } from "jsr:@std/assert";
import myPlugin from "../../main.ts";

Deno.test("should not flag numeric literals assigned to constants", () => {
  const code = `
      const MAX_RETRIES = 5;
      const TIMEOUT = 1000;
    `;

  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 0);
});

Deno.test(
  "should flag numeric literals assigned to non-constant variables",
  () => {
    const code = `
      let retries = 5;
      var timeout = 1000;
    `;

    const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

    assertEquals(diagnostics.length, 2);
    assertEquals(
      diagnostics[0].message,
      "Avoid magic number: extract this numeric literal '5' into a well-named constant."
    );
    assertEquals(
      diagnostics[1].message,
      "Avoid magic number: extract this numeric literal '1000' into a well-named constant."
    );
  }
);

Deno.test("should flag numeric literals used in expressions", () => {
  const code = `const result = 10 + 20;`;

  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 2);
  assertEquals(
    diagnostics[0].message,
    "Avoid magic number: extract this numeric literal '10' into a well-named constant."
  );
  assertEquals(
    diagnostics[1].message,
    "Avoid magic number: extract this numeric literal '20' into a well-named constant."
  );
});

Deno.test("should flag numeric literals passed as function arguments", () => {
  const code = `
      function setTimeout(callback, delay) {}
      setTimeout(() => {}, 3000);
    `;

  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 1);
  assertEquals(
    diagnostics[0].message,
    "Avoid magic number: extract this numeric literal '3000' into a well-named constant."
  );
});

Deno.test("should flag numeric literals in array initializations", () => {
  const code = `
      const numbers = [1, 2, 3];
    `;

  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 3);
  assertEquals(
    diagnostics[0].message,
    "Avoid magic number: extract this numeric literal '1' into a well-named constant."
  );
  assertEquals(
    diagnostics[1].message,
    "Avoid magic number: extract this numeric literal '2' into a well-named constant."
  );
  assertEquals(
    diagnostics[2].message,
    "Avoid magic number: extract this numeric literal '3' into a well-named constant."
  );
});

Deno.test("should flag numeric literals in object properties", () => {
  const code = `
      const config = {
        retryLimit: 5,
        timeout: 1000
      };
    `;

  const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);

  assertEquals(diagnostics.length, 2);
  assertEquals(
    diagnostics[0].message,
    "Avoid magic number: extract this numeric literal '5' into a well-named constant."
  );
  assertEquals(
    diagnostics[1].message,
    "Avoid magic number: extract this numeric literal '1000' into a well-named constant."
  );
});
