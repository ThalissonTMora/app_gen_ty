import { injectable, inject } from 'tsyringe';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/userRepository';
import HashService from './hashService';
import env from '../config/env';

@injectable()
class LoginService {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('HashService') private hashService: HashService
  ) {}

  async login(data: any) {
    const { email, password } = data;
    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await this.hashService.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: '7d' });

    return { token, refreshToken };
  }
}

export default LoginService;
