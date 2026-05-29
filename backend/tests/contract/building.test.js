import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, seedDatabase } from '../../src/config/database.js';

describe('Building & Apartment API Contract Tests', () => {
  before(async () => {
    // Ensure DB is initialized and seeded
    await getDb();
    await seedDatabase();
  });

  describe('GET /api/building', () => {
    it('should return building details when authorized', async () => {
      const res = await request(app)
        .get('/api/building')
        .set('X-User-Id', 'usr_pres_001');

      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name');
    });

    it('should return 401 when unauthorized', async () => {
      const res = await request(app).get('/api/building');
      expect(res.status).to.equal(401);
    });
  });

  describe('GET /api/apartments', () => {
    it('should return apartment list', async () => {
      const res = await request(app)
        .get('/api/apartments')
        .set('X-User-Id', 'usr_pres_001');

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('POST /api/apartments', () => {
    it('should create a new apartment (President only)', async () => {
      const newApt = {
        unit_number: '2A',
        owner_id: 'usr_owner_001',
        share_percentage: 10.0,
        referencia_catastral: '9999999ZZ9999Y0001XX'
      };

      const res = await request(app)
        .post('/api/apartments')
        .set('X-User-Id', 'usr_pres_001')
        .send(newApt);

      // Status 201 expected for creation
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
    });

    it('should return 403 for non-president users', async () => {
      const res = await request(app)
        .post('/api/apartments')
        .set('X-User-Id', 'usr_owner_001')
        .send({
          unit_number: '2B',
          owner_id: 'usr_owner_002',
          share_percentage: 5.0,
          referencia_catastral: '8888888WW8888V0001UU'
        });

      expect(res.status).to.equal(403);
    });
  });
});
