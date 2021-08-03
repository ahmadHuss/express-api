import 'dotenv/config';
import express from 'express';

// Module exports
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

import controller from './controllers/api';

// defining the Express appServer
const app = express();

// Middlewares
app.use(helmet()); // adding Helmet to enhance API's security
app.use(cors()); // enabling CORS for all requests
app.use(morgan('combined')); // adding morgan to log HTTP requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for the API
app.use('/api', controller);
// Normal routes should return 404
app.use('*', controller);

app.listen(process.env.PORT || 3000, function () {
  console.log('Server started successfully.');
});
