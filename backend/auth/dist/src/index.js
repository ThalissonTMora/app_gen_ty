"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
require("./config/container");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8001;
database_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
    app.use(express_1.default.json());
    app.use('/api/v1/auth', authRoutes_1.default);
    app.listen(port, () => {
        console.log(`Auth service running on port ${port}`);
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization', error);
});
