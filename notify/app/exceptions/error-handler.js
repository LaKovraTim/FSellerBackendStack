const Response = require('../shared/envelope.response');
const { GenericException, NotFoundException, JoiSchemaException } = require('.');
const { INTERNAL_SERVER_ERROR } = require('../enums/error-codes.enum');

const ErrorHandler = (err, req, res) => {
  let exception = err;
  const response = new Response();

  switch (err.name) {
    case GenericException.name:
    case NotFoundException.name:
    case JoiSchemaException.name:
      break;
    default:
      exception = new GenericException(INTERNAL_SERVER_ERROR, exception.message);
      break;
  }

  let body = null;
  if (err.httpCode !== 404) {
    response.status.code = exception.ex.code;
    response.status.error = exception.ex.error;
    response.status.techMessage = exception.message;
    response.status.userMessage = exception.ex.userMsg;
    response.payload = exception.payload || null;
    body = response;
  }

  res.status(exception.httpCode).send(body);
};

module.exports = ErrorHandler;
