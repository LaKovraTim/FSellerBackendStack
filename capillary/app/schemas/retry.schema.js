const Joi = require('joi');

const schema = Joi.object({
  comment: Joi.string().strict().trim().required(),
  latitud: Joi.number().precision(8),
  longitud: Joi.number().precision(8),
  success: Joi.boolean().required()
});

module.exports = schema;
