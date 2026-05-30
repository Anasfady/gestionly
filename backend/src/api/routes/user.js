import express from 'express';
import { getMyProfile, getUsers, createUser } from '../../controllers/user.js';
import { authMiddleware } from '../middleware/auth.js';
import { requireRole } from '../middleware/role.js';

const router = express.Router();

router.get('/me', authMiddleware, getMyProfile);
router.get('/', authMiddleware, requireRole('President'), getUsers);
router.post('/', authMiddleware, requireRole('President'), createUser);

export default router;
