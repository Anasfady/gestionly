import { getDb } from '../config/database.js';

export class Building {
  static get() {
    const db = getDb();
    return db.prepare('SELECT * FROM buildings LIMIT 1').get();
  }

  static update(name, address) {
    const db = getDb();
    const existing = this.get();
    if (existing) {
      db.prepare('UPDATE buildings SET name = ?, address = ? WHERE id = ?').run(name, address, existing.id);
      return { id: existing.id, name, address };
    } else {
      const id = 'bld_' + Date.now();
      db.prepare('INSERT INTO buildings (id, name, address) VALUES (?, ?, ?)').run(id, name, address);
      return { id, name, address };
    }
  }
}
