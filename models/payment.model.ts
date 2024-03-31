import { Schema, model } from 'mongoose';

const PaymentSchema = new Schema({
    camper: { type: Schema.Types.ObjectId, ref: 'Camper', required: true },
    fecha_pago: { type: String, required: true },
    monto: { type: Number, required: true }
});

PaymentSchema.methods.toJSON = function() {
    const { __v, _id, ...payment } = this.toObject();
    return payment;
}


export default model('Payment', PaymentSchema);