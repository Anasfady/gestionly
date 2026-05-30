import { getDb } from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

// Helper to generate IDs if not using auto-increment
const generateId = (prefix) => `${prefix}_${uuidv4().split('-')[0]}`;

export const getApartments = async (req, res, next) => {
  try {
    const db = await getDb();
    const apartments = await db.all('SELECT * FROM apartments');
    res.json(apartments);
  } catch (error) {
    next(error);
  }
};

export const createApartment = async (req, res, next) => {
  try {
    const { unit_number, owner_id, share_percentage, referencia_catastral } = req.body;
    const db = await getDb();

    // Get building ID (assuming one for MVP)
    const building = await db.get('SELECT id FROM buildings LIMIT 1');
    if (!building) {
      return res.status(404).json({ message: 'Building not found' });
    }

    // Validation: Total share cannot exceed 100%
    const { totalShare } = await db.get('SELECT SUM(share_percentage) as totalShare FROM apartments');
    if ((totalShare || 0) + share_percentage > 100.0) {
      return res.status(400).json({ message: 'Total share percentage would exceed 100%' });
    }

    const id = generateId('apt');
    await db.run(
      'INSERT INTO apartments (id, building_id, unit_number, owner_id, share_percentage, referencia_catastral) VALUES (?, ?, ?, ?, ?, ?)',
      [id, building.id, unit_number, owner_id, share_percentage, referencia_catastral]
    );

    const created = await db.get('SELECT * FROM apartments WHERE id = ?', [id]);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const assignTenant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tenant_id } = req.body;
    const db = await getDb();

    const apartment = await db.get('SELECT * FROM apartments WHERE id = ?', [id]);
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }

    await db.run(
      'UPDATE apartments SET tenant_id = ? WHERE id = ?',
      [tenant_id, id]
    );

    const updated = await db.get('SELECT * FROM apartments WHERE id = ?', [id]);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
