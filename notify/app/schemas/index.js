const whatsappSchema = require('./whatsapp.schema');

const validations = {
  whatsapp: {
    post: whatsappSchema
  }
};

module.exports = validations;
