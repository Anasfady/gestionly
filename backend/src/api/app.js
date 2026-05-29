import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import * as OpenApiValidator from 'express-openapi-validator';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { authMiddleware, authorize } from './middleware/auth.js';
import * as buildingController from '../controllers/building.js';
import * as apartmentController from '../controllers/apartment.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Load Swagger Contract
const specPath = path.join(__dirname, '..', '..', '..', 'specs', '001-comunidad-api', 'contracts', 'openapi.yaml');
const swaggerDocument = YAML.load(specPath);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Install OpenAPI Validator
app.use(
  OpenApiValidator.middleware({
    apiSpec: specPath,
    validateRequests: true,
    validateResponses: true,
  })
);

// Auth Middleware (Global for /api except health)
app.use('/api', authMiddleware);

// Building Routes
app.get('/api/building', buildingController.getBuilding);
app.put('/api/building', authorize(['President']), buildingController.updateBuilding);

// Apartment Routes
app.get('/api/apartments', apartmentController.getApartments);
app.post('/api/apartments', authorize(['President']), apartmentController.createApartment);
app.post('/api/apartments/:id/tenants', authorize(['President']), apartmentController.assignTenant);

// Error Handler
app.use((err, req, res, next) => {
  console.error('Validator/Application Error:', err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

export default app;
