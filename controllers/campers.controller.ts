import { Request, Response } from "express";
import Camper from '../models/camper.model';
import Payment from '../models/payment.model';
import { getLatestRegisterNumber } from "../helpers/database-validations";
import { SchemaType, SchemaTypes } from "mongoose";

const getCamperByRegisterNumber = async (req: Request, res: Response) => {
    const { register_number } = req.params;
    const camper = await Camper.findOne({registro: register_number});
    res.json({
        status: 'success',
        data: camper
    });
}

const addCamper = async (req: Request, res: Response) => {
    const body = req.body;

    const registro: number = await getLatestRegisterNumber();
    const fecha_registro: String = new Date().toString();

    const newCamper = new Camper({ ...body, registro, fecha_registro });
    const camper = await newCamper.save(); 
    res.json({
        status: 'success',
        data: camper
    });
}

const getCampers = async (req: Request, res: Response) => {
    
    const [campers, total] = await Promise.all([
        Camper.find(),
        Camper.countDocuments()
    ]);
    
    res.json({
        status: 'success',
        total: total,
        data: campers
    });
}

const deleteCampers = async (req: Request, res: Response) => {

    const { ids } = req.query;
    const ids_aux: any = ids;
    const ids_arr: string[] = ids_aux.split(',');

    ids_arr.forEach(async (id: any) => {
        await Camper.findByIdAndDelete(id);
        await Payment.deleteOne({camper: id});
    });

    res.json({
        status: 'success'
    })
}


export { 
    getCamperByRegisterNumber,
    addCamper,
    getCampers,
    deleteCampers
}