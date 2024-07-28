import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RegisterService from '../services/registerService';

const registerController = async (req: Request, res: Response) => {
    try {
        const { login, email, password } = req.body;
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        const registerService = container.resolve(RegisterService);
        await registerService.register({ login, email, password, ip: ip as string });

        return res.status(201).json({ success: true });
    } catch (error) {
        return res.status(400).json({ success: false, message: (error as Error).message });
    }
};

export default registerController;
