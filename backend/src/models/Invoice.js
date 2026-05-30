import { getDb } from '../config/database.js';

export class Invoice {
  static create(data) {
    const db = getDb();
    const id = 'inv_' + Date.now();
    db.prepare(`
      INSERT INTO invoices (id, apartment_id, budget_id, type, amount, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.apartment_id, data.budget_id || null, data.type, data.amount, 'Pending', new Date().toISOString());
    
    return { id, ...data };
  }

  static findById(id) {
    const db = getDb();
    return db.prepare('SELECT * FROM invoices WHERE id = ?').get(id);
  }

  static updateStatus(id, status) {
    const db = getDb();
    db.prepare('UPDATE invoices SET status = ?, paid_at = ? WHERE id = ?').run(
      status, 
      status === 'Paid' ? new Date().toISOString() : null, 
      id
    );
  }
}
