import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/api/app.js';

describe('Building and Units Contract Tests', () => {
  it('GET /api/building should return building info', async () => {
    const res = await request(app).get('/api/building');
    expect(res.status).to.equal(200);
  });

  it('POST /api/units should validate unit data', async () => {
    const res = await request(app)
      .post('/api/units')
      .send({}); // Invalid
    expect(res.status).to.equal(400);
  });
});
