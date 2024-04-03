"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
const twilio_1 = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendSMS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const twilio = new twilio_1.Twilio(accountSid, authToken);
        const { to, message } = req.body;
        const from = process.env.TWILIO_PHONE_NUMBER || '';
        const msgData = {
            to,
            from,
            body: message
        };
        const response = yield twilio.messages.create(msgData);
        if (response.sid) {
            res.json({
                status: 'success',
                sid: response.sid
            });
        }
        else {
            return res.status(404).json({
                status: 'error',
                message: 'Error sending sms'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});
exports.sendSMS = sendSMS;
//# sourceMappingURL=twilio.controller.js.map