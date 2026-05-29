import express from 'express';
import buildingRoutes from './building.js';
import unitRoutes from './unit.js';
import tenantRoutes from './tenant.js';
import budgetInvoiceRoutes from './budget_invoice.js';
import pollRoutes from './poll.js';
import incidentRoutes from './incident.js';

const router = express.Router();

router.use('/building', buildingRoutes);
router.use('/apartments', unitRoutes);
router.use('/apartments/:apartment_id/tenants', tenantRoutes);
router.use('/', budgetInvoiceRoutes);
router.use('/polls', pollRoutes);
router.use('/incidents', incidentRoutes);

export default router;
