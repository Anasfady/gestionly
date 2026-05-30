import { User } from '../models/User.js';

export const getMyProfile = (req, res) => {
  const userId = req.headers['x-user-id'];
  if (!userId) return res.status(401).json({ message: 'Unauthorized' });

  const user = User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const associatedApartments = User.getAssociatedApartments(userId);
  res.json({ user, associated_apartments: associatedApartments });
};

export const getUsers = (req, res) => {
  const { role } = req.query;
  if (!role) return res.status(400).json({ message: 'Role is required' });
  const users = User.findByRole(role);
  res.json(users);
};

export const createUser = (req, res) => {
  const user = User.create(req.body);
  res.status(201).json(user);
};
