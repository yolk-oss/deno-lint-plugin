/**
 * Rule to disallow dangling underscores in identifiers.
 * This helps maintain clean and consistent naming conventions.
 */
export default {
  create(context) {
    return {
      Identifier(node: Deno.lint.Identifier): void {
        const name = node.name;

        if (name.startsWith("_") || name.endsWith("_")) {
          context.report({
            node,
            message: `Unexpected dangling underscore in '${name}'.`,
          });
        }
      },
    };
  },
} satisfies Deno.lint.Rule;
