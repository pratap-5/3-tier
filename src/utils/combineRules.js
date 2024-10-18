import { Node } from './ast.js';
import { parse } from './createRule.js';

// Function to combine multiple ASTs into one
export const combine = (rules) => {
  const combinedAST = rules.reduce((combined, ruleString) => {
    const newAST = parse(ruleString);
    if (!combined) return newAST;

    // Combine using OR (as an example)
    return new Node('operator', combined, newAST, 'OR');
  }, null);

  return combinedAST;
};
