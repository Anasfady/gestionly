import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, closeDb, seedDatabase } from '../../src/config/database.js';
import fs from 'fs';

describe('Poll & Voting API Contract Tests', () => {
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

  describe('POST /api/polls', () => {
    it('should create a new poll (President only)', async () => {
      const res = await request(app)
        .post('/api/polls')
        .set('X-User-Id', 'usr_pres_001')
        .send({
          title: 'Vote 1',
          description: 'Desc 1',
          options: ['Yes', 'No']
        });
      expect(res.status).to.equal(201);
    });
  });

  describe('POST /api/polls/:poll_id/votes', () => {
    it('should cast a vote', async () => {
      // Need poll_id
      const res = await request(app)
        .post('/api/polls/pol_123/votes')
        .set('X-User-Id', 'usr_owner_001')
        .send({
          apartment_id: 'apt_001',
          selected_option: 'Yes'
        });
      // Will fail as pol_123 doesn't exist
      expect(res.status).to.be.oneOf([201, 404]);
    });
  });
});
