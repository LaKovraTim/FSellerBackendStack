const { get, isEmpty } = require('lodash');
const schemas = require('../schemas/index');
const { SCHEMA_NOT_VALID, SCHEMA_NOT_FOUND } = require('../enums/error-codes.enum');
const JoiSchemaException = require('../exceptions/joi-schema.exception');

const validateBody = (req, res, next) => {
  try {
    const urlLastPart = req.originalUrl.split('/').pop();

    const schema = get(schemas[`${urlLastPart}`], req.method.toLowerCase(), {});

    if (isEmpty(schema)) {
      throw new JoiSchemaException(SCHEMA_NOT_FOUND);
    }

    const isValid = schema.options({ abortEarly: false }).validate(req.body);

    if (isValid.error) {
      throw new JoiSchemaException(SCHEMA_NOT_VALID, isValid.error);
    }

    next();
  } catch (e) {
    console.log(e)
    next(e);
  }
};

module.exports = validateBody;
