"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const generateToken = (payload, expiresIn) => {
    return jsonwebtoken_1.default.sign(payload, env_1.default.jwtSecret, { expiresIn });
};
exports.generateToken = generateToken;
