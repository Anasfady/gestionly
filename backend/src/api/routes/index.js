import express from 'express';
import buildingRoutes from './building.js';
import unitRoutes from './unit.js';
import tenantRoutes from './tenant.js';
import budgetInvoiceRoutes from './budget_invoice.js';
import pollRoutes from './poll.js';

const router = express.Router();

router.use('/building', buildingRoutes);
router.use('/apartments', unitRoutes);
router.use('/apartments/:apartment_id/tenants', tenantRoutes);
router.use('/', budgetInvoiceRoutes);
router.use('/polls', pollRoutes);

export default router;
