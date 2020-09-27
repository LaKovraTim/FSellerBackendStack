const RetrieResponse = require('./attempt.response');
const CustomerResponse = require('./customer.response');
const ProductResponse = require('./product.response');

class WorkOrderResponse {
  constructor(response) {
    // eslint-disable-next-line no-underscore-dangle
    this.id = response._id;
    this.commerceCode = response.commerceCode;
    this.purchaseOrder = response.purchaseOrder;
    this.cashOnDelivery = response.cashOnDelivery;
    this.total = response.total;
    this.creationDate = response.creationDate;
    this.deliveryDate = response.deliveryDate;
    this.comment = response.comment;
    this.status = response.status;
    this.customer = new CustomerResponse(response.customer);
    this.retries = response.retries.map((a) => { return new RetrieResponse(a); });
    this.products = response.products.map((p) => { return new ProductResponse(p); });
  }
}

module.exports = WorkOrderResponse;
