import { Request, Response } from 'express';
import { Twilio } from 'twilio';
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendSMS = async (req: Request, res: Response) => {
    try {
        const twilio = new Twilio(accountSid, authToken);

        const { to, message } = req.body;

        const from = process.env.TWILIO_PHONE_NUMBER || '';

        const msgData: MessageListInstanceCreateOptions = {
            to,
            from,
            body: message
        };

        const response = await twilio.messages.create(msgData);
        if(response.sid){
            res.json({
                status: 'success',
                sid: response.sid
            })
        } else {
            return res.status(404).json({
                status: 'error',
                message: 'Error sending sms'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

export {
    sendSMS
}