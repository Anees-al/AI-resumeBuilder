import express from 'express';
import { enhanceJobDescripction, enhanceProfessionalSumary, enhanceSkillAts } from '../controllers/aiController.js';

const router=express.Router();

router.post('/enhance-summary',enhanceProfessionalSumary);
router.post('/enhance-job',enhanceJobDescripction);
router.post('/enhanceskill',enhanceSkillAts)
export default router;