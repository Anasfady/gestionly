import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, seedDatabase } from '../../src/config/database.js';
import fs from 'fs';

describe('Incident Reporting API Contract Tests', () => {
  before(async () => {
    try {
      await fs.promises.unlink('./database.sqlite');
    } catch (e) {}
    await getDb();
    await seedDatabase();
  });

  describe('POST /api/incidents', () => {
    it('should report an incident', async () => {
      const res = await request(app)
        .post('/api/incidents')
        .set('X-User-Id', 'usr_owner_001')
        .send({
          title: 'Roof Leak',
          description: 'Water leaking in the attic.'
        });
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
    });
  });
});
