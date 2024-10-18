import mongoose from 'mongoose';

const RuleSchema = new mongoose.Schema({
  ruleString: { type: String, required: true },
  ast: { type: Object, required: true }, // Store AST in JSON format
});

const Rule = mongoose.model('Rule', RuleSchema);

export default Rule;
