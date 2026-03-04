import express from 'express'
import { authenticate } from '../middlewares/authMiddlware.js'
import { createResume, deleteResume, getPublicResumeId, getResumeById, updateResume } from '../controllers/resumeControllers.js'
import upload from '../config/multer.js';

const router=express.Router()

router.post('/createresume',authenticate,createResume);
router.put('/update',upload.single('image'),authenticate,updateResume);
router.delete('/delete/:resumeId',authenticate,deleteResume);
router.get('/get/:resumeId',authenticate,getResumeById);
router.get('/public',getPublicResumeId)
export default router;