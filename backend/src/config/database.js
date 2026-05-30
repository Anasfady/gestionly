import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let db;

export function getDb() {
  if (db) return db;

  const dbFile = process.env.NODE_ENV === 'test' ? 'test_database.sqlite' : (process.env.DATABASE_FILE || 'database.sqlite');
  
  db = new Database(dbFile);
  db.pragma('foreign_keys = ON');

  // Run migrations (schema)
  const schemaPath = path.join(__dirname, '..', 'models', 'schemas.sql');
  const schema = readFileSync(schemaPath, 'utf8');
  
  db.exec(schema);

  return db;
}

export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

export async function seedDatabase() {
  const db = getDb();

  // Check if already seeded (e.g., check if users exist)
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get();
  
  if (userCount.count > 0) {
    console.log('Database already seeded. Skipping...');
    return;
  }

  console.log('Seeding database with initial data...');

  // Seed Users
  db.prepare(
    'INSERT OR IGNORE INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)'
  ).run('usr_pres_001', 'Juan Presidente', 'juan@ejemplo.com', '600111222', 'President');
  db.prepare(
    'INSERT OR IGNORE INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)'
  ).run('usr_owner_001', 'Maria Propietaria', 'maria@ejemplo.com', '600333444', 'Owner');
  db.prepare(
    'INSERT OR IGNORE INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)'
  ).run('usr_owner_002', 'Pedro Inquilino', 'pedro@ejemplo.com', '600555666', 'Owner');
  db.prepare(
    'INSERT OR IGNORE INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)'
  ).run('usr_tenant_001', 'Luis Inquilino', 'luis@ejemplo.com', '600777888', 'Tenant');

  // Seed Building
  db.prepare(
    'INSERT OR IGNORE INTO buildings (id, name, address) VALUES (?, ?, ?)'
  ).run('bld_111', 'Edificio Central', 'Calle Mayor 1');

  // Seed Apartments
  db.prepare(
    'INSERT OR IGNORE INTO apartments (id, building_id, unit_number, type, owner_id, share_percentage, referencia_catastral) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).run('apt_001', 'bld_111', '1A', 'Apartment', 'usr_owner_001', 10.0, '12345678901234567890');
  db.prepare(
    'INSERT OR IGNORE INTO apartments (id, building_id, unit_number, type, owner_id, share_percentage, referencia_catastral) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).run('apt_002', 'bld_111', '1B', 'Apartment', 'usr_owner_002', 20.0, '09876543210987654321');

  console.log('Seeding completed successfully.');
}
