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
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUserService_1 = __importDefault(require("../../../service/CreateUserService"));
const DeleteUserService_1 = __importDefault(require("../../../service/DeleteUserService"));
const UpdateUserService_1 = __importDefault(require("../../../service/UpdateUserService"));
const ListUserService_1 = __importDefault(require("../../../service/ListUserService"));
const FindUserService_1 = __importDefault(require("../../../service/FindUserService"));
const AuthenticationService_1 = __importDefault(require("../../../service/AuthenticationService"));
let UserController = class UserController {
    async create(req, res) {
        const service = tsyringe_1.container.resolve(CreateUserService_1.default);
        const user = req.body;
        res.status(201).json(await service.execute(user));
    }
    async delete(req, res) {
        const service = tsyringe_1.container.resolve(DeleteUserService_1.default);
        const { id } = req.params;
        res.status(201).json(await service.execute(id));
    }
    async update(req, res) {
        const service = tsyringe_1.container.resolve(UpdateUserService_1.default);
        const { id } = req.params;
        const data = req.body;
        res.status(201).json(await service.execute(id, data));
    }
    async list(req, res) {
        const service = tsyringe_1.container.resolve(ListUserService_1.default);
        res.status(201).json(await service.execute());
    }
    async find(req, res) {
        const service = tsyringe_1.container.resolve(FindUserService_1.default);
        const { id } = req.params;
        res.status(201).json(await service.execute(id));
    }
    async authenticate(request, response) {
        const { email, password } = request.body;
        const authenticateUserService = tsyringe_1.container.resolve(AuthenticationService_1.default);
        const token = await authenticateUserService.execute({ email, password });
        response.json(token);
    }
};
UserController = __decorate([
    (0, tsyringe_1.injectable)()
], UserController);
exports.UserController = UserController;
