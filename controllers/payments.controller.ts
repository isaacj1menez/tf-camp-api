import { Request, Response } from "express";
import Payment from '../models/payment.model';

const getPaymentByTransactionNumber = async (req: Request, res: Response) => {
    const { transaction_number } = req.query;
    let payment;
    if(transaction_number) {
        payment = await Payment.findById(transaction_number).populate('camper', 'nombre');
    } else {
        payment = await Payment.find().populate('camper', 'nombre');
    }

    res.json({
        status: 'success',
        data: payment
    });
}

const addPayment= async (req: Request, res: Response) => {
    const body = req.body;

    const fecha_pago: String = new Date().toString();

    const newPayment = new Payment({ ...body, fecha_pago });
    const payment = await newPayment.save(); 
    res.json({
        status: 'success',
        data: payment
    });
}

const getPaymentsByCamper = async (req: Request, res: Response) => {
    const { camper_id } = req.params;
    
    const [payments, total] = await Promise.all([
        Payment.find({camper: camper_id}),
        Payment.countDocuments({camper: camper_id})
    ]);
    
    res.json({
        status: 'success',
        total: total,
        data: payments
    });
}


export { 
    getPaymentByTransactionNumber,
    addPayment,
    getPaymentsByCamper
}