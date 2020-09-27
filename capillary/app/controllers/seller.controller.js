const WorkOrderService = require('../services/work-order.service');
const RetryDeliveryService = require('../services/retry-delivery.service');

class SellerController {
  static async getWorkOrdersList(req, res, next) {
    try {
      const workOrderService = new WorkOrderService();
      const resp = await workOrderService.getList({ sellerId: req.params.id });

      res.status(200).send(resp);
    } catch (ex) {
      next(ex);
    }
  }

  static async saveWorkOrderRetry(req, res, next) {
    try {
      const retryDeliveryService = new RetryDeliveryService();
      const resp = await retryDeliveryService.saveRetry({
        sellerId: req.params.sellerId, woId: req.params.woId, data: req.body,
      }, req.files);

      res.status(201).send(resp);
    } catch (ex) {
      next(ex);
    }
  }

  static async turnOnRouteMyWork(req, res, next) {
    try {
      const workOrderService = new WorkOrderService();
      await workOrderService.turnOnRouteMyWork(req.params.sellerId, req.body.workOrderIds);

      res.status(204).send();
    } catch (ex) {
      next(ex);
    }
  }
}

module.exports = SellerController;
