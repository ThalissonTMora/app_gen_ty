"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let ForgotPasswordService = class ForgotPasswordService {
    async forgotPassword(data) {
        const { email } = data;
        // Placeholder para enviar email de recuperação de senha
        console.log(`Sending password reset link to ${email}`);
    }
};
ForgotPasswordService = __decorate([
    (0, tsyringe_1.injectable)()
], ForgotPasswordService);
exports.default = ForgotPasswordService;
