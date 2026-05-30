import { getDb } from '../config/database.js';

export class Unit {
  static create(data) {
    const db = getDb();
    const id = 'apt_' + Date.now();
    // Assuming building_id is bld_111 for MVP
    const building_id = 'bld_111';
    const type = data.type || 'Apartment'; // Add default
    const exempt_from_fees = data.exempt_from_fees ? 1 : 0;
    
    db.prepare(`
      INSERT INTO apartments (id, building_id, unit_number, type, owner_id, share_percentage, referencia_catastral, exempt_from_fees)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, building_id, data.unit_number, type, data.owner_id, data.share_percentage, data.referencia_catastral, exempt_from_fees);
    
    return { id, ...data, type, exempt_from_fees: !!exempt_from_fees };
  }

  static findAll() {
    const db = getDb();
    const rows = db.prepare('SELECT * FROM apartments').all();
    return rows.map(row => ({
      ...row,
      exempt_from_fees: !!row.exempt_from_fees
    }));
  }

  static findById(id) {
    const db = getDb();
    const row = db.prepare('SELECT * FROM apartments WHERE id = ?').get(id);
    if (!row) return null;
    return {
      ...row,
      exempt_from_fees: !!row.exempt_from_fees
    };
  }

  static assignTenant(apartmentId, tenantId) {
    const db = getDb();
    db.prepare('UPDATE apartments SET tenant_id = ? WHERE id = ?').run(tenantId, apartmentId);
    return this.findById(apartmentId);
  }
}
