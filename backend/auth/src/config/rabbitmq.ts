import amqplib, { Connection, Channel, Options } from 'amqplib';
import env from './env';

class RabbitMQ {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  private async connect(): Promise<void> {
    try {
      this.connection = await amqplib.connect({
        protocol: 'amqp',
        hostname: env.rabbitMQHost,
        port: env.rabbitMQPort,
        username: env.rabbitMQUser,
        password: env.rabbitMQPassword,
      } as Options.Connect);

      this.connection.on('error', (err) => {
        console.error('RabbitMQ connection error', err);
        this.connection?.close();
        setTimeout(() => this.connect(), 5000); // Retry connection after 5 seconds
      });

      this.connection.on('close', () => {
        console.error('RabbitMQ connection closed');
        setTimeout(() => this.connect(), 5000); // Retry connection after 5 seconds
      });

      this.channel = await this.connection.createChannel();
      console.log('Connected to RabbitMQ');
    } catch (error) {
      console.error('Failed to connect to RabbitMQ', error);
      setTimeout(() => this.connect(), 5000); // Retry connection after 5 seconds
    }
  }

  public async getChannel(): Promise<Channel> {
    if (!this.channel) {
      await this.connect();
    }
    return this.channel!;
  }

  public async publishToQueue(queue: string, message: string): Promise<void> {
    const channel = await this.getChannel();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
  }
}

export const rabbitMQ = new RabbitMQ();
