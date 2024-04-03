"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const twilio_controller_1 = require("../controllers/twilio.controller");
const express_validator_1 = require("express-validator");
const field_validator_1 = __importDefault(require("../middlewares/field-validator"));
exports.router = (0, express_1.Router)();
exports.router.post('/', [
    (0, express_validator_1.check)('to', 'Destination number required').notEmpty(),
    (0, express_validator_1.check)('message', 'Message text is required').notEmpty(),
    field_validator_1.default
], twilio_controller_1.sendSMS);
exports.default = exports.router;
//# sourceMappingURL=twilio.routes.js.map