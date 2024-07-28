import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LogoutService from '../services/logoutService';

class LogoutController {
  async logout(req: Request, res: Response) {
    try {
      const logoutService = container.resolve(LogoutService);
      await logoutService.logout(req.body);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }
}

export default new LogoutController();
