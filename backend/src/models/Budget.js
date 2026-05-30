import { getDb } from '../config/database.js';

export class Budget {
  static create(data) {
    const db = getDb();
    const id = 'bud_' + Date.now();
    db.prepare(`
      INSERT INTO budgets (id, building_id, year, total_annual_amount)
      VALUES (?, ?, ?, ?)
    `).run(id, data.building_id, data.year, data.total_annual_amount);
    
    return { id, ...data };
  }

  static findByYear(buildingId, year) {
    const db = getDb();
    return db.prepare('SELECT * FROM budgets WHERE building_id = ? AND year = ?').get(buildingId, year);
  }
}
