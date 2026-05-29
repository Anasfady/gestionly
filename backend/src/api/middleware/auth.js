import { getDb } from '../../config/database.js';

export const authMiddleware = async (req, res, next) => {
  const userId = req.headers['x-user-id'];
  
  if (!userId) {
    return res.status(401).json({ message: 'Missing X-User-Id header' });
  }

  try {
    const db = getDb();
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid User ID' });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
