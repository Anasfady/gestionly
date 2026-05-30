import { getDb } from '../config/database.js';

export class Delegation {
  static create(data) {
    const db = getDb();
    const id = 'del_' + Date.now();
    db.prepare(`
      INSERT INTO delegations (id, poll_id, delegator_id, delegatee_id)
      VALUES (?, ?, ?, ?)
    `).run(id, data.poll_id, data.delegator_id, data.delegatee_id);
    
    return { id, ...data };
  }
}
