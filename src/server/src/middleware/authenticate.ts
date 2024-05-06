// authenticate.ts

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtSecret } from "../ultils/accesEnv";
import User from '../models/Users.model';

const JWT_SECRET = jwtSecret || "";

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      throw new Error('Username and password are required');
    }

    const user = await User.findOne({ username, password, email });
    if (user) {
      throw new Error('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
};

// Function to authenticate user and generate JWT token
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: (error as any).message });
  }
};
