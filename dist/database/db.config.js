"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let error_message = '';
const dataBaseConnection = () => {
    try {
        mongoose_1.default.connect(process.env.MONGO_DB_CONNECTION);
        console.info('Connection to the database correctly established');
    }
    catch (error) {
        error_message = 'Error on database connection';
        console.error(error_message, error);
        throw new Error(error_message);
    }
};
exports.dataBaseConnection = dataBaseConnection;
//# sourceMappingURL=db.config.js.map