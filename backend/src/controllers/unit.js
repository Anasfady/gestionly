import { Unit } from '../models/Unit.js';

export const createApartment = (req, res) => {
  const apartment = Unit.create(req.body);
  res.status(201).json(apartment);
};

export const getApartments = (req, res) => {
  const apartments = Unit.findAll();
  res.json(apartments);
};

export const assignTenant = (req, res) => {
  const { apartment_id } = req.params;
  const { tenant_id } = req.body;
  const updatedApartment = Unit.assignTenant(apartment_id, tenant_id);
  res.status(200).json(updatedApartment);
};
