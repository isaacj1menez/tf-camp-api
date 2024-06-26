"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    camper: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Camper', required: true },
    fecha_pago: { type: String, required: true },
    monto: { type: Number, required: true }
});
PaymentSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, payment = __rest(_a, ["__v", "_id"]);
    return payment;
};
exports.default = (0, mongoose_1.model)('Payment', PaymentSchema);
//# sourceMappingURL=payment.model.js.map