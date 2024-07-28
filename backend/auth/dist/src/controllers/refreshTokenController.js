"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const refreshTokenService_1 = __importDefault(require("../services/refreshTokenService"));
class RefreshTokenController {
    async refreshToken(req, res) {
        try {
            const refreshTokenService = tsyringe_1.container.resolve(refreshTokenService_1.default);
            const result = await refreshTokenService.refreshToken(req.body);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ message: "error.message" });
        }
    }
}
exports.default = new RefreshTokenController();
