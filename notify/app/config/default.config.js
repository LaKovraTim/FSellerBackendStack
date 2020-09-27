module.exports = {
  basePath: '/notify/v1',
  port: 9001,
  tz: process.env.NOTIFY_TZ || 'America/Santiago',
  whatsAppApi: {
    token: process.env.NOTIFY_WSP_TOKEN || '486bd59a:JSoP2php8ccyBXAa',
    url: process.env.NOTIFY_WSP_URL || 'https://messages-sandbox.nexmo.com/v0.1/messages',
    phone: process.env.NOTIFY_WSP_SOURCE_PHONE || 14157386170,
    defaultPhoneDestination: process.env.NOTIFY_WSP_DEFAULT_DESTINATION_PHONE || null
  },
  mongo: {
    host: process.env.NOTIFY_MONGODB_HOST || '127.0.0.1',
    port: process.env.NOTIFY_MONGODB_PORT || 27017,
    db: process.env.NOTIFY_MONGODB_DB,
    user: process.env.NOTIFY_MONGODB_USERNAME,
    password: process.env.NOTIFY_MONGODB_PASSWORD
  },
  email: {
    service: process.env.NOTIFY_MAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.NOTIFY_MAIL_USER || 'fast.seller.app@gmail.com',
      pass: process.env.NOTIFY_MAIL_PASSWORD || 'XXbOWptsQd'
    }
  }
};
