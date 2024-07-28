import { Router } from 'express';
import RegisterController from '../controllers/registerController';
import LoginController from '../controllers/loginController';
import ForgotPasswordController from '../controllers/forgotPasswordController';
import LogoutController from '../controllers/logoutController';
import RefreshTokenController from '../controllers/refreshTokenController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', RegisterController);
router.post('/login', LoginController);
router.post('/forgot-password', ForgotPasswordController);
router.post('/logout', authMiddleware, LogoutController.logout);
router.post('/refresh-token', RefreshTokenController.refreshToken);

export default router;
