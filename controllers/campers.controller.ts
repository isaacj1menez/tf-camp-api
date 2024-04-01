import { Request, Response } from "express";
import Camper from '../models/camper.model';
import Payment from '../models/payment.model';
import { getLatestRegisterNumber } from "../helpers/database-validations";

const getCamperByRegisterNumber = async (req: Request, res: Response) => {
    try {
        const { register_number } = req.params;
        const camper = await Camper.findOne({ registro: register_number });

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
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

const addCamper = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const registro: number = await getLatestRegisterNumber();
        const fecha_registro: string = new Date().toString();

        const newCamper = new Camper({ ...body, registro, fecha_registro });

        const camper = await newCamper.save();

        res.status(201).json({
            status: 'success',
            data: camper
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

const getCampers = async (req: Request, res: Response) => {
    try {
        const query = { status: true };

        const [campers, total] = await Promise.all([
            Camper.find(query),
            Camper.countDocuments(query)
        ]);
        
        res.status(200).json({
            status: 'success',
            total: total,
            data: campers
        });
    } catch (error) {
        console.error('Error retrieving campers:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}


const deleteCampers = async (req: Request, res: Response) => {
    try {
        const { ids } = req.query;
        if (!ids) {
            return res.status(400).json({
                success: false,
                message: 'IDs no proporcionados'
            });
        }

        const idArray = (ids as string).split(',');

        const updatePromises = idArray.map(async (id: string) => {
            await Camper.findByIdAndUpdate(id, { status: false });
        });

        await Promise.all(updatePromises);

        res.json({
            status: 'success'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}


export { 
    getCamperByRegisterNumber,
    addCamper,
    getCampers,
    deleteCampers
}