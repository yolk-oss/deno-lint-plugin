export default {
  create(context) {
    return {
      Identifier(node) {
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
