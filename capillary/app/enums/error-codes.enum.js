const ErrorCodes = {
  INTERNAL_SERVER_ERROR: {
    httpCode: 500, code: 500, error: 'INTERNAL_SERVER_ERROR', msg: '[%s]', userMsg: null
  },
  SCHEMA_NOT_FOUND: {
    httpCode: 400, code: 101, error: 'SCHEMA_NOT_FOUND', msg: 'Schema no encontrado.', userMsg: null
  },
  SCHEMA_NOT_VALID: {
    httpCode: 400, code: 102, error: 'SCHEMA_NOT_VALID', msg: 'Schema no válido.', userMsg: null
  },
  WORK_ORDER_NOT_FOUND: {
    httpCode: 400, code: 103, error: 'WORK_ORDER_NOT_FOUND', msg: 'WORK_ORDER_NOT_FOUND', userMsg: null
  },
  WORK_ORDER_IS_NOT_PENDING: {
    httpCode: 400, code: 104, error: 'WORK_ORDER_IS_NOT_PENDING', msg: 'WORK_ORDER_IS_NOT_PENDING', userMsg: null
  },
  FILE_UPLOAD_NOT_FOUND: {
    httpCode: 400, code: 105, error: 'FILE_UPLOAD_NOT_FOUND', msg: 'FILE_UPLOAD_NOT_FOUND', userMsg: null
  },
  WORK_ORDER_IS_NOT_ON_ROUTE: {
    httpCode: 400, code: 106, error: 'WORK_ORDER_IS_NOT_ON_ROUTE', msg: 'WORK_ORDER_IS_NOT_ON_ROUTE', userMsg: null
  },
};

module.exports = Object.freeze(ErrorCodes);
