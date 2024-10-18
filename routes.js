import express from 'express';
import { createRule, combineRules, evaluateRule } from './src/controllers/ruleController.js';

const router = express.Router();

// Routes for rule engine API
router.post('/createRule', createRule);
router.post('/combineRules', combineRules);
router.post('/evaluateRule', evaluateRule);

export default router;
