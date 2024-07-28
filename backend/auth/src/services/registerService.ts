import { injectable, inject } from 'tsyringe';
import UserRepository from '../repositories/userRepository';
import HashService from './hashService';
import User from '../models/User';
import EventPublisherService from './messaging/eventPublisherService';

@injectable()
class RegisterService {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('HashService') private hashService: HashService,
    @inject('EventPublisherService') private eventPublisherService: EventPublisherService
  ) {}

  async register(data: any) {
    const { login, email, password, ip } = data;
    const hashedPassword = await this.hashService.hash(password);
    
    const user = await this.userRepository.create({
      login,
      email,
      password: hashedPassword,
      ip
    });
    
    await this.eventPublisherService.publishUserCreated(user);
    
    return user;
  }
}

export default RegisterService;
