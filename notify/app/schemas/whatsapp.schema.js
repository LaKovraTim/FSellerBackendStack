const Joi = require('joi');

const schema = Joi.object({
  workOrderId: Joi.string().strict().trim().required(),
  type: Joi.string().valid('ON_ROUTE', 'RETURN', 'DELIVERED', 'ON_RETRY', 'CANCELLED').required()
});

module.exports = schema;
