"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const camper_routes_1 = __importDefault(require("../routes/camper.routes"));
const payment_routes_1 = __importDefault(require("../routes/payment.routes"));
const twilio_routes_1 = __importDefault(require("../routes/twilio.routes"));
const db_config_1 = require("../database/db.config");
dotenv_1.default.config();
class Server {
    constructor() {
        this.apiPaths = {
            campers: '/api/campers',
            payments: '/api/payments',
            sms: '/api/twilio/sms'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.connectDataBase();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.campers, camper_routes_1.default);
        this.app.use(this.apiPaths.payments, payment_routes_1.default);
        this.app.use(this.apiPaths.sms, twilio_routes_1.default);
    }
    connectDataBase() {
        (0, db_config_1.dataBaseConnection)();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.model.js.map