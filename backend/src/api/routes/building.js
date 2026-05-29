import express from 'express';
import { getBuilding, updateBuilding } from '../../controllers/building.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getBuilding);
router.put('/', authMiddleware, updateBuilding);

export default router;
