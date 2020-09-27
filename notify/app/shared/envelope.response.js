class Response {
  constructor() {
    this.status = {
      code: null, error: null, api: 'NOTIFY', userMessage: null, techMessage: null
    };

    this.payload = null;
  }
}

module.exports = Response;
