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
exports.getRegisterNumber = exports.getCamperByPhone = void 0;
const camper_model_1 = __importDefault(require("../models/camper.model"));
const getCamperByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const camper = yield camper_model_1.default.findOne({ telefono: phone });
    if (camper) {
        throw new Error('Ya existe un registro con el mismo número de teléfono');
    }
});
exports.getCamperByPhone = getCamperByPhone;
const getRegisterNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const randomInt = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
    return `TF-${randomInt}`;
});
exports.getRegisterNumber = getRegisterNumber;
//# sourceMappingURL=database-validations.js.map