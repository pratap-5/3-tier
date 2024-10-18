import { Node } from "./ast.js";

// Function to create AST from rule string
export const parse = (ruleString) => {
  const rule = ruleString.trim();

  if (rule.includes("AND")) {
    const parts = rule.split("AND");
    const leftNode = new Node("operand", null, null, parts[0].trim());
    const rightNode = new Node("operand", null, null, parts[1].trim());
    return new Node("operator", leftNode, rightNode, "AND");
  } else if (rule.includes("OR")) {
    const parts = rule.split("OR");
    const leftNode = new Node("operand", null, null, parts[0].trim());
    const rightNode = new Node("operand", null, null, parts[1].trim());
    return new Node("operator", leftNode, rightNode, "OR");
  }

  throw new Error("Invalid rule string");
};
