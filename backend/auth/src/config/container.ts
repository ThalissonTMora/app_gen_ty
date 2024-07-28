import 'reflect-metadata';
import { container } from 'tsyringe';

import UserRepository from '../repositories/userRepository';
import RegisterService from '../services/registerService';
import LoginService from '../services/loginService';
import ForgotPasswordService from '../services/forgotPasswordService';
import LogoutService from '../services/logoutService';
import RefreshTokenService from '../services/refreshTokenService';
import HashService from '../services/hashService';
import EventPublisherService from '../services/messaging/eventPublisherService';

container.registerSingleton('UserRepository', UserRepository);
container.registerSingleton('RegisterService', RegisterService);
container.registerSingleton('LoginService', LoginService);
container.registerSingleton('ForgotPasswordService', ForgotPasswordService);
container.registerSingleton('LogoutService', LogoutService);
container.registerSingleton('RefreshTokenService', RefreshTokenService);
container.registerSingleton('HashService', HashService);
container.registerSingleton('EventPublisherService', EventPublisherService);


export default container;
