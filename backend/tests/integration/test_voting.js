import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/api/app.js';
import { getDb, closeDb, seedDatabase } from '../../src/config/database.js';
import fs from 'fs';

describe('Voting Integration', () => {
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

  it('should create a poll and cast a vote', async () => {
    // 1. Create Poll
    const pollRes = await request(app)
      .post('/api/polls')
      .set('X-User-Id', 'usr_pres_001')
      .send({
        title: 'Budget Vote',
        description: 'Vote on annual budget',
        options: ['Accept', 'Reject']
      });
    expect(pollRes.status).to.equal(201);
    const pollId = pollRes.body.id;

    // 2. Cast Vote
    const voteRes = await request(app)
      .post(`/api/polls/${pollId}/votes`)
      .set('X-User-Id', 'usr_owner_001')
      .send({
        apartment_id: 'apt_001',
        selected_option: 'Accept'
      });
    expect(voteRes.status).to.equal(201);
  });
});
