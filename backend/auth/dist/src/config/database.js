"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../models/User"));
const env_1 = __importDefault(require("./env"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: env_1.default.dbHost,
    port: env_1.default.dbPort,
    username: env_1.default.dbUser,
    password: env_1.default.dbPassword,
    database: env_1.default.dbName,
    entities: [User_1.default],
    synchronize: true,
});
