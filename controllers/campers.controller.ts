import { Request, Response } from "express";
import Camper from '../models/camper.model';

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
    const newCamper = new Camper(body);
    const camper = await newCamper.save(); 
    res.json(camper);
}

export { 
    getCamperByRegisterNumber,
    addCamper
}