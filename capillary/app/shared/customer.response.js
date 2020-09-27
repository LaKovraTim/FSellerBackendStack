class CustomerResponse {
  constructor(response) {
    this.run = response.run;
    this.firstName = response.firstName;
    this.secondName = response.secondName;
    this.contact = response.contact;
    this.address = response.address;
    this.receiver = response.receiver;
  }
}

module.exports = CustomerResponse;
