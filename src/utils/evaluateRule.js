// Function to evaluate AST against user data
export const evaluate = (ast, userData) => {
    if (ast.type === 'operand') {
      const [attribute, operator, value] = ast.value.split(' ');
      const userValue = userData[attribute];
  
      switch (operator) {
        case '>': return userValue > parseInt(value);
        case '<': return userValue < parseInt(value);
        case '=': return userValue === value.replace(/'/g, "");
        default: throw new Error('Invalid operator');
      }
    } else if (ast.type === 'operator') {
      const leftResult = evaluate(ast.left, userData);
      const rightResult = evaluate(ast.right, userData);
  
      if (ast.value === 'AND') return leftResult && rightResult;
      if (ast.value === 'OR') return leftResult || rightResult;
    }
  
    throw new Error('Invalid AST structure');
  };
  