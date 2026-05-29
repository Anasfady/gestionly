import { getDb } from '../config/database.js';

export class Unit {
  static create(data) {
    const db = getDb();
    const id = 'apt_' + Date.now();
    // Assuming building_id is bld_111 for MVP
    const building_id = 'bld_111';
    const type = data.type || 'Apartment'; // Add default
    
    db.prepare(`
      INSERT INTO apartments (id, building_id, unit_number, type, owner_id, share_percentage, referencia_catastral)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, building_id, data.unit_number, type, data.owner_id, data.share_percentage, data.referencia_catastral);
    
    return { id, ...data, type };
  }

  static findAll() {
    const db = getDb();
    return db.prepare('SELECT * FROM apartments').all();
  }

  static findById(id) {
    const db = getDb();
    return db.prepare('SELECT * FROM apartments WHERE id = ?').get(id);
  }

  static assignTenant(apartmentId, tenantId) {
    const db = getDb();
    db.prepare('UPDATE apartments SET tenant_id = ? WHERE id = ?').run(tenantId, apartmentId);
    return this.findById(apartmentId);
  }
}
