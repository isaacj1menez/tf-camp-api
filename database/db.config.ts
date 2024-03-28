import mongoose from 'mongoose';

let error_message: string = '';

const dataBaseConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_CONNECTION!);
        console.info('Connection to the database correctly established');
    } catch (error) {
        error_message = 'Error on database connection';
        console.error(error_message, error);
        throw new Error(error_message)
    }
}

export {
    dataBaseConnection
}