import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ForgotPasswordService from '../services/forgotPasswordService';

const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const forgotPasswordService = container.resolve(ForgotPasswordService);
    await forgotPasswordService.forgotPassword(req.body.email);

    return res.status(200).json({ success: true, message: 'Password reset email sent' });
  } catch (error) {
    return res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export default forgotPasswordController;
