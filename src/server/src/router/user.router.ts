import express from 'express';
import { loginUserController, registerUserController } from "../controllers/user.controller";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        registerUserController(req, res);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        loginUserController(req, res);
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
