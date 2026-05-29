import { Unit } from '../models/Unit.js';
import { Budget } from '../models/Budget.js';

export const calculateFees = (buildingId, year, frequency) => {
  const budget = Budget.findByYear(buildingId, year);
  if (!budget) {
    throw new Error('Active budget not found for the given year');
  }

  const units = Unit.findAll();
  const divisor = frequency === 'monthly' ? 12 : frequency === 'quarterly' ? 4 : 1;

  return units.map(unit => ({
    apartment_id: unit.id,
    unit_number: unit.unit_number,
    share_percentage: unit.share_percentage,
    calculated_fee: (budget.total_annual_amount * (unit.share_percentage / 100)) / divisor,
    frequency
  }));
};
