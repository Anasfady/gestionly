import { Incident } from '../models/Incident.js';

export const reportIncident = (req, res) => {
  const incident = Incident.create({ ...req.body, reporter_id: req.user.id });
  res.status(201).json(incident);
};
