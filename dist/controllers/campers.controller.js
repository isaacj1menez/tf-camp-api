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
exports.deleteCampers = exports.getCampers = exports.addCamper = exports.getCamperByRegisterNumber = void 0;
const camper_model_1 = __importDefault(require("../models/camper.model"));
const database_validations_1 = require("../helpers/database-validations");
const getCamperByRegisterNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { register_number } = req.params;
        const camper = yield camper_model_1.default.findOne({ registro: register_number });
        if (!camper) {
            return res.status(404).json({
                status: 'error',
                message: 'Camper not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: camper
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});
exports.getCamperByRegisterNumber = getCamperByRegisterNumber;
const addCamper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        let flag = true;
        let registro = '';
        do {
            registro = yield (0, database_validations_1.getRegisterNumber)();
            const camper = yield camper_model_1.default.findOne({ registro });
            if (!camper)
                flag = false;
        } while (flag);
        const fecha_registro = new Date().toString();
        const newCamper = new camper_model_1.default(Object.assign(Object.assign({}, body), { registro, fecha_registro }));
        const camper = yield newCamper.save();
        res.status(201).json({
            status: 'success',
            data: camper
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});
exports.addCamper = addCamper;
const getCampers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { status: true };
        const [campers, total] = yield Promise.all([
            camper_model_1.default.find(query),
            camper_model_1.default.countDocuments(query)
        ]);
        res.status(200).json({
            status: 'success',
            total: total,
            data: campers
        });
    }
    catch (error) {
        console.error('Error retrieving campers:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});
exports.getCampers = getCampers;
const deleteCampers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ids } = req.query;
        if (!ids) {
            return res.status(400).json({
                success: false,
                message: 'IDs no proporcionados'
            });
        }
        const idArray = ids.split(',');
        const updatePromises = idArray.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            yield camper_model_1.default.findByIdAndUpdate(id, { status: false });
        }));
        yield Promise.all(updatePromises);
        res.json({
            status: 'success'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
});
exports.deleteCampers = deleteCampers;
//# sourceMappingURL=campers.controller.js.map