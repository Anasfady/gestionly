import express from 'express';
import buildingRoutes from './building.js';
import unitRoutes from './unit.js';
import tenantRoutes from './tenant.js';

const router = express.Router();

router.use('/building', buildingRoutes);
router.use('/apartments', unitRoutes);
router.use('/apartments/:apartment_id/tenants', tenantRoutes);

export default router;
