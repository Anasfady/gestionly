import { Budget } from '../models/Budget.js';
import { calculateFees } from '../services/feeService.js';

export const setBudget = (req, res) => {
  const budget = Budget.create(req.body);
  res.status(201).json(budget);
};

export const getFees = (req, res) => {
  try {
    const { frequency } = req.query;
    // Assuming buildingId is bld_111 for MVP
    const fees = calculateFees('bld_111', 2026, frequency || 'monthly');
    res.json(fees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
