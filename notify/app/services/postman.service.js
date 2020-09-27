const { exec } = require('child_process');
const path = require('path');
const moment = require('moment-timezone');
const { GenericException } = require('../exceptions');
const { WhatsApp } = require('../enums/messages.enum');
const mongo = require('../utils/db');
const {
  WORK_ORDER_NOT_FOUND
} = require('../enums/error-codes.enum');
const config = require('../config');

class PostmanService {
  constructor() {
    this.db = mongo.getDB();
  }

  async send(data) {
    const workOrder = await this.db.collection('workOrder').findOne({ _id: mongo.ObjectId(data.workOrderId) });
    if (workOrder === null) {
      throw new GenericException(WORK_ORDER_NOT_FOUND);
    }
    let success = false;
    let error = null;
    let message = null;
    try {
      message = this.whatsapp(data.type, workOrder.customer, workOrder.purchaseOrder);
      success = true;
    } catch (ex) {
      error = ex.message;
    }

    const notify = {
      type: 'whatsapp',
      creationDate: moment().tz(config.tz).format('YYYY-MM-DDTHH:mm:ss'),
      purchaseOrder: workOrder.purchaseOrder,
      message,
      error,
      success
    };
    this.db.collection('notify').insertOne(notify);
  }

  whatsapp(type, customer, order) {
    let phone = config.whatsAppApi.defaultPhoneDestination || customer.contact.phone;
    phone = phone.replace('+', '');

    const msg = WhatsApp[`${type}`].replace('%name', customer.firstName).replace('%order', order);
    exec(`sh ${__dirname}${path.sep}wsp.sh`, { env: { TEXT: msg, PHONE: phone } }, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
    });

    return msg;
  }

  async email() {
    throw new Error('not implemented yet');
  }
}

module.exports = PostmanService;
