"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const registerService_1 = __importDefault(require("../services/registerService"));
class RegisterController {
    async register(req, res) {
        try {
            const registerService = tsyringe_1.container.resolve(registerService_1.default);
            const result = await registerService.register(req.body);
            res.status(201).json(result);
        }
        catch (error) {
            res.status(400).json({ message: "error.message" });
        }
    }
}
exports.default = new RegisterController();
