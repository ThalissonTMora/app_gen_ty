import { injectable, inject } from 'tsyringe';
import UserRepository from '../repositories/userRepository';
import crypto from 'crypto';
import { addHours } from 'date-fns';
import EventPublisherService from './messaging/eventPublisherService';

@injectable()
class ForgotPasswordService {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('EventPublisherService') private eventPublisherService: EventPublisherService
  ) {}

  async forgotPassword(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    user.resetPasswordToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordExpires = addHours(new Date(), 1);

    await this.userRepository.save(user);
    await this.eventPublisherService.publishPasswordResetRequested(user);
  }
}

export default ForgotPasswordService;
