module.exports = {
  basePath: '/capillary/v1',
  port: 9001,
  tz: process.env.CAPILLARY_TZ || 'America/Santiago',
  mongo: {
    host: process.env.CAPILLARY_MONGODB_HOST || '127.0.0.1',
    port: process.env.CAPILLARY_MONGODB_PORT || 27017,
    db: process.env.CAPILLARY_MONGODB_DB,
    user: process.env.CAPILLARY_MONGODB_USERNAME,
    password: process.env.CAPILLARY_MONGODB_PASSWORD
  },
  workOrderMaxRetries: process.env.CAPILLARY_WORK_ORDER_MAX_RETRIES || 3,
  uploadFilesDirectory: '/upload-files',
  notifyApi: {
    host: process.env.CAPILLARY_NOTIFY_API_HOST || 'http://localhost',
    path: process.env.CAPILLARY_NOTIFY_API_PATH || 'notify/v1/push/whatsapp',
    port: process.env.CAPILLARY__NOTIFY_API_PORT || 9002
  }
};
