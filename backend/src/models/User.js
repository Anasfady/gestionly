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
}
