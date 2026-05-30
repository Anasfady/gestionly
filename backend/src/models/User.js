import { getDb } from '../config/database.js';

export class User {
  static findById(id) {
    const db = getDb();
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  }

  static findByRole(role) {
    const db = getDb();
    return db.prepare('SELECT * FROM users WHERE role = ?').all(role);
  }

  static create(data) {
    const db = getDb();
    const id = 'usr_' + Date.now();
    db.prepare('INSERT INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)')
      .run(id, data.name, data.email, data.phone_number, data.role);
    return { id, ...data };
  }

  static getAssociatedApartments(userId) {
    const db = getDb();
    const rows = db.prepare('SELECT id FROM apartments WHERE owner_id = ? OR tenant_id = ?').all(userId, userId);
    return rows.map(row => row.id);
  }
}
