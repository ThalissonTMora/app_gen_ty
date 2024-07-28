import 'reflect-metadata';
import { DataSource } from 'typeorm';
import User from '../models/User';
import env from './env';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: env.dbHost,
  port: env.dbPort,
  username: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  entities: [User],
  synchronize: true,
});
