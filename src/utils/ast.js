// AST Node structure for the rule engine
export class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type; // 'operator' or 'operand'
      this.left = left; // left child node (if operator)
      this.right = right; // right child node (if operator)
      this.value = value; // condition value (if operand)
    }
  }