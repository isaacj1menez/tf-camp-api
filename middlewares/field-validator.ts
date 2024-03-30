import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const fieldValidations = (req: Request, res: Response, next: any) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors
        });
    }

    next();
}

export default fieldValidations;