import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, closeDb, seedDatabase } from '../../src/config/database.js';
import fs from 'fs';

describe('Incident Reporting API Contract Tests', () => {
  before(async () => {
    const dbFile = process.env.NODE_ENV === 'test' ? 'test_database.sqlite' : 'database.sqlite';
    try {
      await fs.promises.unlink(`./${dbFile}`);
    } catch (e) {}
    await getDb();
    await seedDatabase();
  });

  after(async () => {
    closeDb();
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
