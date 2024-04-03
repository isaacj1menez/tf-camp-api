import { Router } from 'express';
import { sendSMS } from '../controllers/twilio.controller';
import { check } from 'express-validator';
import fieldValidations from '../middlewares/field-validator';


export const router = Router();

router.post('/', [
    check('to', 'Destination number required').notEmpty(),
    check('message', 'Message text is required').notEmpty(),
    fieldValidations
], sendSMS)

export default router;