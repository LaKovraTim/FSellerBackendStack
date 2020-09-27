const axios = require('axios');
const config = require('../config');
const { NotifyTypes } = require('../enums/work-order-status.enum');

class NotifyService {
  static sendNotify(workOrderId, type) {
    const url = `${config.notifyApi.host}:${config.notifyApi.port}/${config.notifyApi.path}`;

    const typeParam = NotifyTypes[`${type}`];

    axios({
      method: 'post',
      url,
      data: { workOrderId, type: typeParam }
    }).catch((e) => {
      // error
    });
  }
}

module.exports = NotifyService;
