import 'dotenv/config';
import express from 'express';

import apiController from './controllers/api';

// Server
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for the API
app.use('/api', apiController);

app.listen(3000);
