import mongoose from 'mongoose';

async function connectDatabase() {
  const mongoConnectionString = process.env.MONGODB_URI;

  if (!mongoConnectionString) {
    throw new Error('Please add MONGODB_URI to your .env file');
  }

  await mongoose.connect(mongoConnectionString);
  console.log('MongoDB connection is ready');
}

export default connectDatabase;