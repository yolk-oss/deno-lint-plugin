export function skipChainExpression(node: Deno.lint.Node) {
  return node && node.type === "ChainExpression" ? node.expression : node;
}

export function getParentNode(
  ctx: Deno.lint.RuleContext,
  node: Deno.lint.Node
): Deno.lint.Node | null {
  const ancestors = ctx.sourceCode.getAncestors(node);
  return ancestors[ancestors.length - 1] ?? null;
}
