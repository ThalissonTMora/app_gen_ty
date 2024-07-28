import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RefreshTokenService from '../services/refreshTokenService';

class RefreshTokenController {
  async refreshToken(req: Request, res: Response) {
    try {
      const refreshTokenService = container.resolve(RefreshTokenService);
      const result = await refreshTokenService.refreshToken(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }
}

export default new RefreshTokenController();
