import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('❌ MONGODB_URI is not defined in environment variables');
  }

  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(uri);
};
