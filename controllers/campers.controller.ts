import { Request, Response } from "express";
import Camper from '../models/camper.model';
import { getLatestRegisterNumber } from "../helpers/database-validations";

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
    const fecha_registro: String = new Date().toLocaleString();

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


export { 
    getCamperByRegisterNumber,
    addCamper,
    getCampers
}