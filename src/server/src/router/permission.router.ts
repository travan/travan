import express from 'express';
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/add', authenticateToken, async (req, res) => {
    try {
        // registerUserController(req, res);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login',authenticateToken, async (req, res) => {
    try {
        // loginUserController(req, res);
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;