"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = __importDefault(require("../controllers/registerController"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const forgotPasswordController_1 = __importDefault(require("../controllers/forgotPasswordController"));
const logoutController_1 = __importDefault(require("../controllers/logoutController"));
const refreshTokenController_1 = __importDefault(require("../controllers/refreshTokenController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/register', registerController_1.default.register);
router.post('/login', loginController_1.default.login);
router.post('/forgot-password', forgotPasswordController_1.default.forgotPassword);
router.post('/logout', authMiddleware_1.default, logoutController_1.default.logout);
router.post('/refresh-token', refreshTokenController_1.default.refreshToken);
exports.default = router;
