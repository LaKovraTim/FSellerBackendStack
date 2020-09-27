const PostmanService = require('../services/postman.service');

class PushController {
  static async sendWhatsAppMsg(req, res, next) {
    try {
      const postmanService = new PostmanService();
      await postmanService.send(req.body);

      res.status(201).send();
    } catch (ex) {
      next(ex);
    }
  }
}

module.exports = PushController;
