import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import authRoutes from './routes/authRoutes';
import './config/container';

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.use(express.json());
    app.use('/api/v1/auth', authRoutes);

    app.listen(port, () => {
      console.log(`Auth service running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error during Data Source initialization', error);
  });
