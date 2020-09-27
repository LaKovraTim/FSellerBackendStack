class ProductResponse {
  constructor(response) {
    this.sku = response.sku;
    this.description = response.description;
    this.amount = response.amount;
  }
}

module.exports = ProductResponse;
