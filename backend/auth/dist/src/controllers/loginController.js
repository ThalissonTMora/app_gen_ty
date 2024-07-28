"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const loginService_1 = __importDefault(require("../services/loginService"));
class LoginController {
    async login(req, res) {
        try {
            const loginService = tsyringe_1.container.resolve(loginService_1.default);
            const result = await loginService.login(req.body);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ message: "error.message" });
        }
    }
}
exports.default = new LoginController();
