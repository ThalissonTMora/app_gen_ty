"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importStar(require("../models/User"));
const database_1 = require("../config/database");
class UserRepository {
    ormRepository;
    constructor() {
        this.ormRepository = database_1.AppDataSource.getRepository(User_1.default);
    }
    async create(userData) {
        const user = this.ormRepository.create({
            login: userData.login,
            email: userData.email,
            password: userData.password,
            ip: userData.ip,
            emailVerifiedAt: userData.emailVerifiedAt ?? null,
            isActive: userData.isActive ?? true,
            lastLoginAt: userData.lastLoginAt ?? null,
            rememberToken: userData.rememberToken ?? null,
            deleted: userData.deleted ?? User_1.UserStatus.ACTIVE,
            createdAt: new Date(),
        });
        return this.ormRepository.save(user);
    }
    async findByEmail(email) {
        return this.ormRepository.findOne({ where: { email } });
    }
    async save(user) {
        return this.ormRepository.save(user);
    }
}
exports.default = UserRepository;
