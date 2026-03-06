import express from 'express';
import { enhanceJobDescripction, enhanceProfessionalSumary } from '../controllers/aiController.js';

const router=express.Router();

router.post('/enhance-summary',enhanceProfessionalSumary);
router.post('/enhance-job',enhanceJobDescripction);
export default router;