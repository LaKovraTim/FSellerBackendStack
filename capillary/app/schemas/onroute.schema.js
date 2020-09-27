const Joi = require('joi');

const schema = Joi.object({
  workOrderIds: Joi.array().min(1).required()
});

module.exports = schema;
