import app from './app.js';
import { getDb, seedDatabase } from '../config/database.js';

const PORT = process.env.PORT || 3000;

// Initialize DB and Start Server
async function startServer() {
  try {
    console.log('Initializing database...');
    await getDb();
    await seedDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
