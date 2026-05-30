import express from 'express';
import { assignTenant } from '../../controllers/unit.js';
import { authMiddleware } from '../middleware/auth.js';
import { requireRole } from '../middleware/role.js';

const router = express.Router({ mergeParams: true }); // Need mergeParams for apartment_id

router.post('/', authMiddleware, requireRole('President'), assignTenant);

export default router;
