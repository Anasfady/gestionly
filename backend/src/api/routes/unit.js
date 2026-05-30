import express from 'express';
import { createApartment, getApartments } from '../../controllers/unit.js';
import { authMiddleware } from '../middleware/auth.js';
import { requireRole } from '../middleware/role.js';

const router = express.Router();

router.get('/', authMiddleware, getApartments);
router.post('/', authMiddleware, requireRole('President'), createApartment);

export default router;
