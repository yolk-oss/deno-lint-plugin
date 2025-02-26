import { assertEquals } from "jsr:@std/assert";
import myPlugin from "../../main.ts";

Deno.test("Valid cases: should not report errors", () => {
  const validCases = [
    "const ANSWER = 42; function* foo() { yield ANSWER; }",
    "const obj = { *foo() { yield 'test'; } };",
    "class A { *foo() { yield true; } }",
    "(function*() { yield null; })();",
    "const TEN = 10; async function* foo() { await Promise.resolve(); yield TEN; }",
  ];

  for (const code of validCases) {
    const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);
    assertEquals(diagnostics.length, 0, `Unexpected error for code: ${code}`);
  }
});

Deno.test("Invalid cases: should report missing 'yield'", () => {
  const invalidCases = [
    {
      code: "const ANSWER = 42; function* foo() { return ANSWER; }",
      message: "Generator function has no 'yield'.",
    },
    {
      code: "const obj = { *foo() { return 'test'; } }",
      message: "Generator function has no 'yield'.",
    },
    {
      code: "class A { *foo() { return false; } }",
      message: "Generator function has no 'yield'.",
    },
    {
      code: "(function*() { return; })();",
      message: "Generator function has no 'yield'.",
    },
    {
      code: "const TEN = 10; async function* foo() { return TEN; }",
      message: "Generator function has no 'yield'.",
    },
  ];

  for (const { code, message } of invalidCases) {
    const diagnostics = Deno.lint.runPlugin(myPlugin, "test_file.ts", code);
    assertEquals(diagnostics.length, 1, `Expected an error for: ${code}`);
    assertEquals(
      diagnostics[0].message,
      message,
      `Unexpected message for: ${code}`
    );
  }
});
