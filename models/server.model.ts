import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import camperRoutes from '../routes/camper.routes';
import paymentRoutes from '../routes/payment.routes';
import { dataBaseConnection } from '../database/db.config';

dotenv.config();

export class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        campers: '/api/campers',
        payments: '/api/payments'
    } 

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.connectDataBase();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.campers, camperRoutes)
        this.app.use(this.apiPaths.payments, paymentRoutes)
    }

    connectDataBase() {
        dataBaseConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}