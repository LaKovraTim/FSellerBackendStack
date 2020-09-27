const retrySchema = require('./retry.schema');
const onRouteSchema = require('./onroute.schema');

const validations = {
  retries: {
    post: retrySchema
  },
  'work-orders': {
    patch: onRouteSchema
  }
};

module.exports = validations;
