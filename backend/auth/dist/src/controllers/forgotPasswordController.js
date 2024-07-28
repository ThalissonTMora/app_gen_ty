"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const forgotPasswordService_1 = __importDefault(require("../services/forgotPasswordService"));
class ForgotPasswordController {
    async forgotPassword(req, res) {
        try {
            const forgotPasswordService = tsyringe_1.container.resolve(forgotPasswordService_1.default);
            await forgotPasswordService.forgotPassword(req.body);
            res.status(200).json({ message: 'Password reset link sent' });
        }
        catch (error) {
            res.status(400).json({ message: "error.message" });
        }
    }
}
exports.default = new ForgotPasswordController();
