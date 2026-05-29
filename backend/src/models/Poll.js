import { getDb } from '../config/database.js';

export class Poll {
  static create(data) {
    const db = getDb();
    const id = 'pol_' + Date.now();
    db.prepare(`
      INSERT INTO polls (id, building_id, title, description, options, end_date, is_secret)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, 'bld_111', data.title, data.description, JSON.stringify(data.options), data.end_date, data.is_secret || false);
    
    return { id, ...data };
  }

  static findById(id) {
    const db = getDb();
    const poll = db.prepare('SELECT * FROM polls WHERE id = ?').get(id);
    if (poll) {
      poll.options = JSON.parse(poll.options);
    }
    return poll;
  }
}
