import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/api/app.js';
import { getDb } from '../../src/config/database.js';

describe('Building Registration Integration', () => {
  before(async () => {
    // Clean DB
    const db = getDb();
    db.prepare('DELETE FROM apartments').run();
    db.prepare('DELETE FROM buildings').run();
  });

  it('should register a new unit', async () => {
    const res = await request(app)
      .post('/api/apartments') // Matches the spec
      .set('X-User-Id', 'usr_pres_001')
      .send({
        unit_number: '1C',
        type: 'Apartment',
        owner_id: 'usr_owner_001',
        share_percentage: 10.0,
        referencia_catastral: '12345678901234567890'
      });
    expect(res.status).to.equal(201);
  });
});
