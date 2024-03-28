"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const campers_controller_1 = require("../controllers/campers.controller");
exports.router = (0, express_1.Router)();
exports.router.get('/:register_number', campers_controller_1.getCamperByRegisterNumber);
exports.router.post('/', campers_controller_1.addCamper);
exports.default = exports.router;
//# sourceMappingURL=camper.routes.js.map