/**
 * Rule to disallow the use of magic numbers in code.
 * Enforces the use of named constants for better code maintainability.
 */
export default {
  create(context) {
    const constantDeclarations = new Set<string>();

    return {
      VariableDeclaration(node: Deno.lint.VariableDeclaration) {
        if (node.kind === "const") {
          for (const declaration of node.declarations) {
            if (
              declaration.init &&
              declaration.init.type === "Literal" &&
              typeof declaration.init.value === "number"
            ) {
              constantDeclarations.add(declaration.init.range.toString());
            }
          }
        }
      },

      Literal(node: Deno.lint.Literal): void {
        if (typeof node.value === "number") {
          if (!constantDeclarations.has(node.range.toString())) {
            context.report({
              node,
              message: `Avoid magic number: extract this numeric literal '${node.value}' into a well-named constant.`,
            });
          }
        }
      },
    };
  },
} satisfies Deno.lint.Rule;
