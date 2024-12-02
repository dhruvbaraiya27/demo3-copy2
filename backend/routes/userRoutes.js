import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Get all users (admin only)
router.get('/', protect, adminOnly, getAllUsers);

export default router;