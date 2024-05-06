import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');

dotenv.config({ path: envPath });

export const jwtSecret = process.env.JWT_SECRET;
export const dbUrl = process.env.MONGO_URI;
export const dbName = process.env.MONGO_DB
