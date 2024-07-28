import { injectable } from 'tsyringe';
import { rabbitMQ } from '../../config/rabbitmq';
import User from '../../models/User';

@injectable()
class EventPublisherService {
  public async publishUserCreated(user: User): Promise<void> {
    const message = {
      id: user.id,
      login: user.login,
      email: user.email,
      ip: user.ip,
      createdAt: user.createdAt.toISOString(),
      status: user.isActive ? 'active' : 'inactive'
    };
    
    await this.publishToQueue('user_created', JSON.stringify(message));
    await this.publishToQueue('email_confirmation', JSON.stringify(message));
  }

  public async publishPasswordResetRequested(user: User): Promise<void> {
    const message = {
      id: user.id,
      email: user.email,
      resetToken: user.resetPasswordToken,
      resetTokenExpires: user.resetPasswordExpires
    };

    await this.publishToQueue('password_reset_requested', JSON.stringify(message));
  }

  private async publishToQueue(queue: string, message: string): Promise<void> {
    const channel = await rabbitMQ.getChannel();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
  }
}

export default EventPublisherService;
