import { Building } from '../models/Building.js';

export const getBuilding = (req, res) => {
  const building = Building.get();
  if (!building) return res.status(404).json({ message: 'Building not found' });
  res.json(building);
};

export const updateBuilding = (req, res) => {
  const { name, address } = req.body;
  const building = Building.update(name, address);
  res.json(building);
};
