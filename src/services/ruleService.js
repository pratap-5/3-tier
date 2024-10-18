import * as createRuleParser from '../utils/createRule.js';
import * as combineRuleUtils from '../utils/combineRules.js';
import * as evaluateRuleUtils from '../utils/evaluateRule.js';

// Create a rule and return the AST
export const createRule = (ruleString) => {
  return createRuleParser.parse(ruleString);
};

// Combine multiple rules into one AST
export const combineRules = (rules) => {
  return combineRuleUtils.combine(rules);
};

// Evaluate a rule (AST) against user data
export const evaluateRule = (ast, userData) => {
  return evaluateRuleUtils.evaluate(ast, userData);
};
