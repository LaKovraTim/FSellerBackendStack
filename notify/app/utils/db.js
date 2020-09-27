const { MongoClient, ObjectId } = require('mongodb');

const config = require('../config');

const url = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`;

// eslint-disable-next-line no-underscore-dangle
let _conn;

const connectDB = async (callback) => {
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, conn) => {
    _conn = conn;
    return callback(err);
  });
};

const getDB = () => _conn.db();

const disconnectDB = () => _conn.db().close();

module.exports = { connectDB, getDB, disconnectDB, ObjectId };
