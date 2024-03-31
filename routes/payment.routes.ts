import { Router } from 'express';
import { check } from 'express-validator';
import fieldValidations from '../middlewares/field-validator';
import { addPayment, getPaymentByTransactionNumber, getPaymentsByCamper } from '../controllers/payments.controller';

export const router = Router();

router.get('/', getPaymentByTransactionNumber);
router.get('/:camper_id', getPaymentsByCamper);

router.post('/', [
    check('camper', 'El id de usuario es requerido').notEmpty(),
    check('camper', 'Proporcione un id válido').isMongoId(),
    check('fecha_pago', 'La fecha de pago es requerida').notEmpty(),
    check('monto', 'Proporcione un monto válido').notEmpty().isNumeric(),
    fieldValidations
], addPayment);

export default router;