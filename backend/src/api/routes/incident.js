import express from 'express';
import { reportIncident } from '../../controllers/incident.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, reportIncident);

export default router;
