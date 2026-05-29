import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let db;

export async function getDb() {
  if (db) return db;

  const dbFile = process.env.DATABASE_FILE || 'database.sqlite';
  
  db = await open({
    filename: dbFile,
    driver: sqlite3.Database
  });

  // Enable foreign keys
  await db.get('PRAGMA foreign_keys = ON');

  // Run migrations (schema)
  const schemaPath = path.join(__dirname, '..', 'models', 'schemas.sql');
  const schema = await fs.readFile(schemaPath, 'utf8');
  
  // sqlite package's exec can handle multiple statements
  await db.exec(schema);

  return db;
}

export async function seedDatabase() {
  const db = await getDb();

  // Check if already seeded (e.g., check if users exist)
  const userCount = await db.get('SELECT COUNT(*) as count FROM users');
  
  if (userCount.count > 0) {
    console.log('Database already seeded. Skipping...');
    return;
  }

  console.log('Seeding database with initial data...');

  // Seed Users
  await db.run(
    'INSERT INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)',
    ['usr_pres_001', 'Juan Presidente', 'juan@ejemplo.com', '600111222', 'President']
  );
  await db.run(
    'INSERT INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)',
    ['usr_owner_001', 'Maria Propietaria', 'maria@ejemplo.com', '600333444', 'Owner']
  );
  await db.run(
    'INSERT INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)',
    ['usr_owner_002', 'Pedro Propietario', 'pedro@ejemplo.com', '600555666', 'Owner']
  );
  await db.run(
    'INSERT INTO users (id, name, email, phone_number, role) VALUES (?, ?, ?, ?, ?)',
    ['usr_tenant_001', 'Ana Inquilina', 'ana@ejemplo.com', '600777888', 'Tenant']
  );

  // Seed Buildings
  await db.run(
    'INSERT INTO buildings (id, name, address) VALUES (?, ?, ?)',
    ['bld_111', 'Residencial Las Rosas', 'Calle de las Rosas 12, Madrid']
  );

  // Seed Apartments
  await db.run(
    'INSERT INTO apartments (id, building_id, unit_number, owner_id, tenant_id, share_percentage, referencia_catastral) VALUES (?, ?, ?, ?, ?, ?, ?)',
    ['apt_001', 'bld_111', '1A', 'usr_owner_001', 'usr_tenant_001', 10.0, '1234567AB1234C0001XY']
  );
  await db.run(
    'INSERT INTO apartments (id, building_id, unit_number, owner_id, tenant_id, share_percentage, referencia_catastral) VALUES (?, ?, ?, ?, ?, ?, ?)',
    ['apt_002', 'bld_111', '1B', 'usr_owner_002', null, 20.0, '9876543ZY9876X0001WA']
  );

  console.log('Seeding completed successfully.');
}
