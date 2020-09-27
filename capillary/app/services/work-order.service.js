const moment = require('moment-timezone');
const mongo = require('../utils/db');
const NotifyService = require('./notify.service');
const WorkOrderResponse = require('../shared/work-order.response');
const config = require('../config');
const { WorkOrderStatus } = require('../enums/work-order-status.enum');

class WorkOrderService {
  constructor() {
    this.db = mongo.getDB();
  }

  async getList(params) {
    const items = [];
    const workOrders = await this.db.collection('workOrder').aggregate([{
      $match: { sellerId: params.sellerId }
    }, {
      $lookup:
      {
        from: 'retry',
        localField: 'purchaseOrder',
        foreignField: 'purchaseOrder',
        as: 'retries'
      }
    }
    ]).toArray();

    workOrders.forEach((wo) => {
      items.push(new WorkOrderResponse(wo));
    });

    return items;
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

  changeStatus(workOrderId, newStatus) {
    const setFields = {
      $set: { status: newStatus }
    };
    const specialStatus = [WorkOrderStatus.DELIVERED, WorkOrderStatus.RETURN];
    if (specialStatus.indexOf(process.env.NODE_ENV) > -1) {
      setFields.deliveredDate = moment().tz(config.tz).format('YYYY-MM-DDTHH:mm:ss');
    }
    this.db.collection('workOrder').updateOne({
      _id: workOrderId
    }, setFields);
    NotifyService.sendNotify(workOrderId, newStatus);
  }

  async turnOnRouteMyWork(sellerId, workOrders) {
    const ids = workOrders.map((i) => {
      return mongo.ObjectId(i);
    });

    const result = await this.db.collection('workOrder').updateMany(
      { _id: { $in: ids }, sellerId },
      { $set: { status: WorkOrderStatus.ON_ROUTE } }
    );
    if (result.modifiedCount) {
      workOrders.forEach((wo) => {
        setTimeout(() => {
          NotifyService.sendNotify(wo, WorkOrderStatus.ON_ROUTE);
        }, 3000);
      });
    }
  }
}

module.exports = WorkOrderService;
