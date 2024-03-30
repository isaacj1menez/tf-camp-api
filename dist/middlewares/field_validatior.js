"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const fieldValidations = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors
        });
    }
    next();
};
exports.default = fieldValidations;
//# sourceMappingURL=field_validatior.js.map