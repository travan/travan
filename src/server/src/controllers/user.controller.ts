import { Request, Response } from 'express';
import { registerUser, loginUser } from '../middleware/authenticate';

// Controller function to handle user registration
export const registerUserController = (req: Request, res: Response): void => {
  registerUser(req, res);
};

// Controller function to handle user login
export const loginUserController = (req: Request, res: Response): void => {
  loginUser(req, res);
};
