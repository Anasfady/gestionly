import { getDb } from '../config/database.js';

export const getBuilding = async (req, res, next) => {
  try {
    const db = await getDb();
    const building = await db.get('SELECT * FROM buildings LIMIT 1');
    if (!building) {
      return res.status(404).json({ message: 'Building not found' });
    }
    res.json(building);
  } catch (error) {
    next(error);
  }
};

export const updateBuilding = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const db = await getDb();
    
    // Get existing building ID
    const building = await db.get('SELECT id FROM buildings LIMIT 1');
    if (!building) {
      return res.status(404).json({ message: 'Building not found' });
    }

    await db.run(
      'UPDATE buildings SET name = ?, address = ? WHERE id = ?',
      [name, address, building.id]
    );

    const updated = await db.get('SELECT * FROM buildings WHERE id = ?', [building.id]);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
