import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LoginService from '../services/loginService';

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const loginService = container.resolve(LoginService);
    const { token, refreshToken } = await loginService.login({ email, password });

    return res.status(200).json({ success: true, token, refreshToken });
  } catch (error) {
    return res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export default loginController;
