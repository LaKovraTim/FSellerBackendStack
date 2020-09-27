class RetrieResponse {
  constructor(response) {
    this.date = response.date;
    this.comment = response.comment;
    this.image = response.image;
    this.location = response.location;
    this.success = response.success;
  }
}

module.exports = RetrieResponse;
