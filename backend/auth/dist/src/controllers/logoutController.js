"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const logoutService_1 = __importDefault(require("../services/logoutService"));
class LogoutController {
    async logout(req, res) {
        try {
            const logoutService = tsyringe_1.container.resolve(logoutService_1.default);
            await logoutService.logout(req.body);
            res.status(200).json({ message: 'Logged out successfully' });
        }
        catch (error) {
            res.status(400).json({ message: "error.message" });
        }
    }
}
exports.default = new LogoutController();
