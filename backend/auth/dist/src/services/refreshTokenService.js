"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const utils_1 = require("../utils");
let RefreshTokenService = class RefreshTokenService {
    async refreshToken(data) {
        const { refreshToken } = data;
        try {
            const payload = jsonwebtoken_1.default.verify(refreshToken, env_1.default.jwtSecret);
            const newToken = (0, utils_1.generateToken)({ id: payload.id }, '1h');
            const newRefreshToken = (0, utils_1.generateToken)({ id: payload.id }, '7d');
            return { token: newToken, refreshToken: newRefreshToken };
        }
        catch (error) {
            throw new Error('Invalid refresh token');
        }
    }
};
RefreshTokenService = __decorate([
    (0, tsyringe_1.injectable)()
], RefreshTokenService);
exports.default = RefreshTokenService;
