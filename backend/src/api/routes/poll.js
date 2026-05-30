import express from 'express';
import { createPoll, castVote, getResults } from '../../controllers/poll.js';
import { authMiddleware } from '../middleware/auth.js';
import { requireRole } from '../middleware/role.js';

const router = express.Router();

router.post('/', authMiddleware, requireRole('President'), createPoll);
router.post('/:poll_id/votes', authMiddleware, castVote);
router.get('/:poll_id/results', getResults);

export default router;
