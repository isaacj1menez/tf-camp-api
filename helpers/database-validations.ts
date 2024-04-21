import Camper from '../models/camper.model';

const getCamperByPhone = async (phone: string) => {
    const camper = await Camper.findOne({telefono: phone});
    if(camper) {
        throw new Error('Ya existe un registro con el mismo número de teléfono');
    }
}

const getRegisterNumber = async (): Promise<string> => {
    const randomInt = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
    return `TF-${randomInt}`;
}

export {
    getCamperByPhone,
    getRegisterNumber
}