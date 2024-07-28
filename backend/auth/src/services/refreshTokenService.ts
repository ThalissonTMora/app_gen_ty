import { injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import env from '../config/env';
import { generateToken } from '../utils';

@injectable()
class RefreshTokenService {
  async refreshToken(data: any) {
    const { refreshToken } = data;

    try {
      const payload = jwt.verify(refreshToken, env.jwtSecret) as any;
      const newToken = generateToken({ id: payload.id }, '1h');
      const newRefreshToken = generateToken({ id: payload.id }, '7d');

      return { token: newToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }
}

export default RefreshTokenService;
