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
exports.getPaymentsByCamper = exports.addPayment = exports.getPaymentByTransactionNumber = void 0;
const payment_model_1 = __importDefault(require("../models/payment.model"));
const getPaymentByTransactionNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transaction_number } = req.query;
    let payment;
    if (transaction_number) {
        payment = yield payment_model_1.default.findById(transaction_number).populate('camper', 'nombre');
    }
    else {
        payment = yield payment_model_1.default.find().populate('camper', 'nombre');
    }
    res.json({
        status: 'success',
        data: payment
    });
});
exports.getPaymentByTransactionNumber = getPaymentByTransactionNumber;
const addPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const fecha_pago = new Date().toString();
    const newPayment = new payment_model_1.default(Object.assign(Object.assign({}, body), { fecha_pago }));
    const payment = yield newPayment.save();
    res.json({
        status: 'success',
        data: payment
    });
});
exports.addPayment = addPayment;
const getPaymentsByCamper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { camper_id } = req.params;
    const [payments, total] = yield Promise.all([
        payment_model_1.default.find({ camper: camper_id }),
        payment_model_1.default.countDocuments({ camper: camper_id })
    ]);
    res.json({
        status: 'success',
        total: total,
        data: payments
    });
});
exports.getPaymentsByCamper = getPaymentsByCamper;
//# sourceMappingURL=payments.controller.js.map