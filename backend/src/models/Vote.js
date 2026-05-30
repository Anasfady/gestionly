import { getDb } from '../config/database.js';

export class Vote {
  static create(data) {
    const db = getDb();
    const id = 'vot_' + Date.now();
    db.prepare(`
      INSERT INTO votes (id, poll_id, user_id, apartment_id, selected_option, created_at, ip_log)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.poll_id, data.user_id, data.apartment_id, data.selected_option, new Date().toISOString(), data.ip_log);
    
    return { id, ...data };
  }

  static findByPoll(pollId) {
    const db = getDb();
    return db.prepare(`
      SELECT v.*, a.share_percentage 
      FROM votes v 
      JOIN apartments a ON v.apartment_id = a.id 
      WHERE v.poll_id = ?
    `).all(pollId);
  }
}
