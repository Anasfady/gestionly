import express from 'express';
import { middleware as openapiValidator } from 'express-openapi-validator';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import dotenv from 'dotenv'; // Add this

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // Add this

const app = express();

app.use(cors());
app.use(express.json());

// Modular Routes
app.use('/api', apiRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err); // Add this
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});


export default app;
