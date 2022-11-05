"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("../../../../../shared/infra/typeorm"));
const tsyringe_1 = require("tsyringe");
const User_1 = require("../entities/User");
let UserRepository = class UserRepository {
    constructor() {
        this.repo = typeorm_1.default.getRepository(User_1.UserEntity);
    }
    list() {
        return this.repo.find();
    }
    create(data) {
        const newUser = this.repo.create(data);
        return this.repo.save(newUser);
    }
    find(id) {
        return this.repo.findOneBy({ id });
    }
    findByUsername(username) {
        return this.repo.findOneBy({ username });
    }
    findByEmail(email) {
        return this.repo.findOneBy({ email });
    }
    async update(id, data) {
        await this.repo.update(id, data);
    }
    async delete(id) {
        await this.repo.softDelete(id);
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.default = UserRepository;
