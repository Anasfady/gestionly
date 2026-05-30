import express from 'express';
import { setBudget, getFees } from '../../controllers/budget.js';
import { handlePaymentWebhook } from '../../controllers/invoice.js';
import { authMiddleware } from '../middleware/auth.js';
import { requireRole } from '../middleware/role.js';

const router = express.Router();

router.post('/budgets', authMiddleware, requireRole('President'), setBudget);
router.get('/fees', authMiddleware, getFees);
router.post('/webhooks/payments', handlePaymentWebhook);

export default router;
