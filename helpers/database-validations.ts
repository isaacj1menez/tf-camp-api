import Camper from '../models/camper.model';

const getCamperByPhone = async (phone: string) => {
    const camper = await Camper.findOne({telefono: phone});
    if(camper) {
        throw new Error('Ya existe un registro con el mismo número de teléfono');
    }
}

const getLatestRegisterNumber = async (): Promise<number> => {
    const camper = await Camper.findOne().sort({ _id: -1 }).limit(1);
    if(!camper) {
        return 1;
    } else {
        const newRegisterNumber: number = Number(camper.registro);
        return newRegisterNumber + 1;
    }
}

export {
    getCamperByPhone,
    getLatestRegisterNumber
}