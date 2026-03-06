import express from 'express';
import { createUser, getUserById, getUserResume, login, logout } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddlware.js';


const router=express.Router();
router.post('/createuser',createUser);
router.post('/login',login)
router.post('/logout',logout)
router.get('/data',authenticate,getUserById)
router.get('/resume',authenticate,getUserResume)

export default router;