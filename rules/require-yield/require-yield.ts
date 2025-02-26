export default {
  create(context) {
    const stack: number[] = [];

    /**
     * If the node is a generator function, start counting `yield` keywords.
     *
     * @param {Node} node A function node to check.
     * @returns {void}
     */
    function beginChecking(
      node: Deno.lint.FunctionDeclaration | Deno.lint.FunctionExpression
    ): void {
      if (node.generator) {
        stack.push(0);
      }
    }

    /**
     * If the node is a generator function, end counting `yield` keywords, then
     * reports result.
     * @param {Node} node A function node to check.
     * @returns {void}
     */
    function endChecking(
      node: Deno.lint.FunctionDeclaration | Deno.lint.FunctionExpression
    ): void {
      if (!node.generator) {
        return;
      }

      const countYield = stack.pop();

      if (
        countYield === 0 &&
        node.body &&
        node.body.body &&
        node.body.body.length > 0
      ) {
        context.report({ node, message: "Generator function has no 'yield'." });
      }
    }

    return {
      FunctionDeclaration: beginChecking,
      FunctionExpression: beginChecking,

      "FunctionDeclaration:exit": endChecking,
      "FunctionExpression:exit": endChecking,

      YieldExpression() {
        if (stack.length > 0) {
          stack[stack.length - 1] += 1;
        }
      },
    };
  },
} satisfies Deno.lint.Rule;
