import { dbUrl, dbName } from "../ultils/accesEnv";
import mongoose from 'mongoose';

// MongoDB connection URL
const mongoURI = `${dbUrl}${dbName}?retryWrites=true&w=majority` || "";

const connectDB = async () => {
  mongoose.connect(mongoURI);

  // Get the default connection
  const db = mongoose.connection;

  // Event listener for successful connection
  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  // Event listener for connection error
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
}

// Export the mongoose connection
export default connectDB;
