"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampers = exports.addCamper = exports.getCamperByRegisterNumber = void 0;
const camper_model_1 = __importDefault(require("../models/camper.model"));
const database_validations_1 = require("../helpers/database-validations");
const getCamperByRegisterNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { register_number } = req.params;
    const camper = yield camper_model_1.default.findOne({ registro: register_number });
    res.json({
        status: 'success',
        data: camper
    });
});
exports.getCamperByRegisterNumber = getCamperByRegisterNumber;
const addCamper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const registro = yield (0, database_validations_1.getLatestRegisterNumber)();
    const fecha_registro = new Date().toLocaleString();
    const newCamper = new camper_model_1.default(Object.assign(Object.assign({}, body), { registro, fecha_registro }));
    const camper = yield newCamper.save();
    res.json({
        status: 'success',
        data: camper
    });
});
exports.addCamper = addCamper;
const getCampers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [campers, total] = yield Promise.all([
        camper_model_1.default.find(),
        camper_model_1.default.countDocuments()
    ]);
    res.json({
        status: 'success',
        total: total,
        data: campers
    });
});
exports.getCampers = getCampers;
//# sourceMappingURL=campers.controller.js.map