"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const campers_controller_1 = require("../controllers/campers.controller");
const express_validator_1 = require("express-validator");
const database_validations_1 = require("../helpers/database-validations");
const field_validator_1 = __importDefault(require("../middlewares/field-validator"));
exports.router = (0, express_1.Router)();
exports.router.get('/:register_number', campers_controller_1.getCamperByRegisterNumber);
exports.router.get('/', campers_controller_1.getCampers);
exports.router.post('/', [
    (0, express_validator_1.check)('nombre', 'El campo nombre es requerido').notEmpty(),
    (0, express_validator_1.check)('edad', 'El campo edad es requerido').notEmpty(),
    (0, express_validator_1.check)('telefono', 'El campo teléfono es requerido').notEmpty(),
    (0, express_validator_1.check)('talla', 'El campo talla es requerido').notEmpty(),
    (0, express_validator_1.check)('contacto', 'El campo contacto es requerido').notEmpty(),
    (0, express_validator_1.check)('nombre_contacto', 'El campo nombre de contacto es requerido').notEmpty(),
    (0, express_validator_1.check)('telefono_contacto', 'El campo telefono de contacto es requerido').notEmpty(),
    (0, express_validator_1.check)('tipo_sangre', 'El campo tipo de sangre es requerido').notEmpty(),
    (0, express_validator_1.check)('telefono').custom(database_validations_1.getCamperByPhone),
    field_validator_1.default
], campers_controller_1.addCamper);
exports.default = exports.router;
//# sourceMappingURL=camper.routes.js.map