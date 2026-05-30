import { getDb } from '../config/database.js';

export class Poll {
  static create(data) {
    const db = getDb();
    const id = 'pol_' + Date.now();
    const is_secret = data.is_secret ? 1 : 0;
    db.prepare(`
      INSERT INTO polls (id, building_id, title, description, options, end_date, is_secret)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, 'bld_111', data.title, data.description, JSON.stringify(data.options), data.end_date, is_secret);
    
    return { id, ...data, is_secret: !!is_secret };
  }

  static findById(id) {
    const db = getDb();
    const poll = db.prepare('SELECT * FROM polls WHERE id = ?').get(id);
    if (poll) {
      poll.options = JSON.parse(poll.options);
      poll.is_secret = !!poll.is_secret;
    }
    return poll;
  }
}
