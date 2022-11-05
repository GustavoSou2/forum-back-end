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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const bcrypt = __importStar(require("bcrypt"));
const UserRepository_1 = __importDefault(require("../infra/typeorm/repositories/UserRepository"));
const TokenManagerProvider_1 = require("../../../shared/providers/TokeManagerProvider/TokenManagerProvider");
const dotenv_flow_1 = require("dotenv-flow");
(0, dotenv_flow_1.config)({ silent: true });
let AuthenticationService = class AuthenticationService {
    constructor(userRepository, tokenManagerProvider) {
        this.userRepository = userRepository;
        this.tokenManagerProvider = tokenManagerProvider;
    }
    async execute({ email, password }) {
        const alreadyByUsername = await this.userRepository.findByEmail(email);
        if (!alreadyByUsername) {
            throw new Error('User not exists');
        }
        const _password = await bcrypt.hash(password, 8);
        const passwordMatch = await bcrypt.compare(password, alreadyByUsername.password);
        if (!passwordMatch) {
            throw new Error('Password incorrect');
        }
        return {
            token: await this.tokenManagerProvider.sign({}, 'secrete', {
                subject: alreadyByUsername.id,
                expiresIn: '1d',
            })
        };
    }
};
AuthenticationService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(UserRepository_1.default)),
    __param(1, (0, tsyringe_1.inject)(TokenManagerProvider_1.JwtTokenManagerProvider)),
    __metadata("design:paramtypes", [Object, Object])
], AuthenticationService);
exports.default = AuthenticationService;
