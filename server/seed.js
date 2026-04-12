import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from './src/config/db.js';
import User from './src/models/User.js';
import { logger } from './src/utils/logger.js';

async function seed() {
  await connectDB();
  const existing = await User.findOne({ role: 'admin' });
  if (existing) {
    logger.info('Admin user already exists — seed skipped');
  } else {
    await User.create({
      name: 'Admin',
      email: 'admin@csevssut.ac.in',
      password: 'admin123456',
      role: 'admin',
    });
    logger.info('Default admin created — email: admin@csevssut.ac.in password: admin123456');
  }
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  logger.error('Seed failed', { message: err.message, stack: err.stack });
  process.exit(1);
});
