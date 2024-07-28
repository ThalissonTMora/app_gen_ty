import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 8001,
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: Number(process.env.DB_PORT) || 3306,
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || '',
  dbName: process.env.DB_NAME || 'auth',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  rabbitMQHost: process.env.RABBITMQ_HOST || 'localhost',
  rabbitMQPort: Number(process.env.RABBITMQ_PORT) || 5672,
  rabbitMQUser: process.env.RABBITMQ_USER || 'guest',
  rabbitMQPassword: process.env.RABBITMQ_PASSWORD || 'guest'
};
