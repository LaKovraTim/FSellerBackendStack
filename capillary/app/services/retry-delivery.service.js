const moment = require('moment-timezone');
const mongo = require('../utils/db');
const { WorkOrderStatus, NotifyTypes } = require('../enums/work-order-status.enum');
const WorkOrderService = require('./work-order.service');
const NotifyService = require('./notify.service');
const { GenericException } = require('../exceptions');
const {
  WORK_ORDER_NOT_FOUND,
  WORK_ORDER_IS_NOT_ON_ROUTE,
  FILE_UPLOAD_NOT_FOUND
} = require('../enums/error-codes.enum');
const config = require('../config');

class RetryDeliveryService {
  constructor() {
    this.db = mongo.getDB();
  }

  async saveRetry({ sellerId = null, woId = null, data = {} }, files) {
    const workOrder = await this.db.collection('workOrder').findOne({ _id: mongo.ObjectId(woId), sellerId });

    if (workOrder === null) {
      throw new GenericException(WORK_ORDER_NOT_FOUND);
    }

    if (workOrder.status !== WorkOrderStatus.ON_ROUTE) {
      throw new GenericException(WORK_ORDER_IS_NOT_ON_ROUTE);
    }

    // const fileName = this.uploadFile(files);
    // if (!fileName) {
    //   throw new GenericException(FILE_UPLOAD_NOT_FOUND);
    // }

    const retry = {
      creationDate: moment().tz(config.tz).format('YYYY-MM-DDTHH:mm:ss'),
      purchaseOrder: workOrder.purchaseOrder,
      location: {
        lat: data.latitud,
        lon: data.longitud
      },
      comment: data.comment,
      image: null,
      success: data.success
    };

    this.db.collection('retry').insertOne(retry);

    let newStatus = null;

    if (retry.success === 'false') {
      const totalRetries = await this.db.collection('retry').countDocuments({ purchaseOrder: workOrder.purchaseOrder });
      if (totalRetries >= config.workOrderMaxRetries) {
        newStatus = WorkOrderStatus.RETURN;
      }
      // eslint-disable-next-line no-underscore-dangle
      NotifyService.sendNotify(workOrder._id, NotifyTypes.ON_RETRY);
    } else {
      newStatus = WorkOrderStatus.DELIVERED;
    }

    if (newStatus) {
      const workOrderService = new WorkOrderService();
      // eslint-disable-next-line no-underscore-dangle
      workOrderService.changeStatus(workOrder._id, newStatus);
    }
  }

  uploadFile(files) {
    let fileName = true;
    if (!files || Object.keys(files).length === 0) {
      fileName = false;
    } else {
      const { image } = files;
      fileName = `${new Date().getTime()}.${image.name.split('.')[1]}`;

      image.mv(`${config.uploadFilesDirectory}/${fileName}`, (err) => {
        if (err) {
          fileName = false;
        }
      });
    }

    return fileName;
  }
}

module.exports = RetryDeliveryService;
