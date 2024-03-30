import { Router } from 'express';
import { addCamper, getCamperByRegisterNumber, getCampers } from '../controllers/campers.controller';
import { check } from 'express-validator';
import { getCamperByPhone } from '../helpers/database-validations';
import fieldValidations from '../middlewares/field-validator';

export const router = Router();

router.get('/:register_number', getCamperByRegisterNumber);
router.get('/', getCampers);

router.post('/', [
    check('nombre', 'El campo nombre es requerido').notEmpty(),
    check('edad', 'El campo edad es requerido').notEmpty(),
    check('telefono', 'El campo teléfono es requerido').notEmpty(),
    check('talla', 'El campo talla es requerido').notEmpty(),
    check('contacto', 'El campo contacto es requerido').notEmpty(),
    check('nombre_contacto', 'El campo nombre de contacto es requerido').notEmpty(),
    check('telefono_contacto', 'El campo telefono de contacto es requerido').notEmpty(),
    check('tipo_sangre', 'El campo tipo de sangre es requerido').notEmpty(),
    check('telefono').custom(getCamperByPhone),
    fieldValidations
], addCamper)

export default router;