import { getDb } from '../config/database.js';

export class Incident {
  static create(data) {
    const db = getDb();
    const id = 'inc_' + Date.now();
    db.prepare(`
      INSERT INTO incidents (id, building_id, title, description, reporter_id, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, 'bld_111', data.title, data.description, data.reporter_id, 'Pending', new Date().toISOString());
    
    return { id, ...data };
  }
}
