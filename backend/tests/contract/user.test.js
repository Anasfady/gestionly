import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, seedDatabase } from '../../src/config/database.js';

describe('User API Contract Tests', () => {
  before(async () => {
    await getDb();
    await seedDatabase();
  });

  describe('GET /api/users/me', () => {
    it('should return 401 when unauthorized', async () => {
      const res = await request(app).get('/api/users/me');
      expect(res.status).to.equal(401);
    });

    it('should return user profile when authorized', async () => {
      const res = await request(app)
        .get('/api/users/me')
        .set('X-User-Id', 'usr_pres_001');

      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('id', 'usr_pres_001');
    });
  });

  describe('GET /api/users', () => {
    it('should return 400 when role is missing', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('X-User-Id', 'usr_pres_001');
      expect(res.status).to.equal(400);
    });

    it('should return list of owners', async () => {
      const res = await request(app)
        .get('/api/users?role=Owner')
        .set('X-User-Id', 'usr_pres_001');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'New User',
        email: 'new_user@example.com',
        phone_number: '+34600000000',
        role: 'Tenant'
      };
      const res = await request(app)
        .post('/api/users')
        .set('X-User-Id', 'usr_pres_001')
        .send(newUser);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name', newUser.name);
    });
  });
});
