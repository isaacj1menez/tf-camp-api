import { Router } from 'express';
import { addCamper, getCamperByRegisterNumber } from '../controllers/campers.controller';

export const router = Router();

router.get('/:register_number', getCamperByRegisterNumber);
router.post('/', addCamper)

export default router;