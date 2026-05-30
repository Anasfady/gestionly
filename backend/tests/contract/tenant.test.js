import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, seedDatabase } from '../../src/config/database.js';

describe('Tenant Assignment API Contract Tests', () => {
  before(async () => {
    await getDb();
    await seedDatabase();
  });

  describe('POST /api/apartments/:id/tenants', () => {
    it('should assign a tenant to an apartment (President only)', async () => {
      // Using pre-seeded apt_002
      const res = await request(app)
        .post('/api/apartments/apt_002/tenants')
        .set('X-User-Id', 'usr_pres_001')
        .send({
          tenant_id: 'usr_tenant_001'
        });

      expect(res.status).to.equal(200);
      expect(res.body.tenant_id).to.equal('usr_tenant_001');
    });

    it('should return 403 for Owners attempting to assign tenants', async () => {
      const res = await request(app)
        .post('/api/apartments/apt_001/tenants')
        .set('X-User-Id', 'usr_owner_001')
        .send({
          tenant_id: 'usr_tenant_001'
        });

      expect(res.status).to.equal(403);
    });
  });
});
