const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const mongo = require('./app/utils/db');

const config = require('./app/config');

const ErrorHandler = require('./app/exceptions/error-handler');

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());


// swagger
if (['prod'].indexOf(process.env.NODE_ENV) === -1) {
  // eslint-disable-next-line global-require
  const swaggerUi = require('swagger-ui-express');
  // eslint-disable-next-line global-require
  const swaggerDocument = require('./swagger/def.json');

  app.use('/swagger/def.json', (req, res) => {
    res.send(swaggerDocument);
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));
}
// health check MS
app.get('/health', (req, res) => {
  res.send({ status: 'UP' });
});

app.use(config.basePath, require('./app/controllers'));

// siempre debe ir al final la función de manejo de errores
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  ErrorHandler(err, req, res);
});

// eslint-disable-next-line no-unused-vars
mongo.connectDB((err, client) => {
  if (err) throw err;
  console.log('success mongo connection');
});

module.exports = app;
