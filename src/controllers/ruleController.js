import * as ruleService from '../services/ruleService.js';

// Controller for creating a rule
export const createRule = (req, res) => {
  const { ruleString } = req.body;
  try {
    const ast = ruleService.createRule(ruleString);
    res.status(200).json({ ast });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller for combining rules
export const combineRules = (req, res) => {
  const { rules } = req.body;
  try {
    const combinedAST = ruleService.combineRules(rules);
    res.status(200).json({ combinedAST });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller for evaluating a rule
export const evaluateRule = (req, res) => {
  const { ast, userData } = req.body;
  try {
    const result = ruleService.evaluateRule(ast, userData);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
