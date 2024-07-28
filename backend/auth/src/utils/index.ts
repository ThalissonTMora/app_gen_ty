import jwt from 'jsonwebtoken';
import env from '../config/env';

export const generateToken = (payload: object, expiresIn: string) => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn });
};
