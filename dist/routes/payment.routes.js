"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const field_validator_1 = __importDefault(require("../middlewares/field-validator"));
const payments_controller_1 = require("../controllers/payments.controller");
exports.router = (0, express_1.Router)();
exports.router.get('/', payments_controller_1.getPaymentByTransactionNumber);
exports.router.get('/:camper_id', payments_controller_1.getPaymentsByCamper);
exports.router.post('/', [
    (0, express_validator_1.check)('camper', 'El id de usuario es requerido').notEmpty(),
    (0, express_validator_1.check)('camper', 'Proporcione un id válido').isMongoId(),
    (0, express_validator_1.check)('fecha_pago', 'La fecha de pago es requerida').notEmpty(),
    (0, express_validator_1.check)('monto', 'Proporcione un monto válido').notEmpty().isNumeric(),
    field_validator_1.default
], payments_controller_1.addPayment);
exports.default = exports.router;
//# sourceMappingURL=payment.routes.js.map