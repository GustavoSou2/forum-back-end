"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const celebrate_1 = require("celebrate");
const createUser_schema_1 = __importDefault(require("../../../schema/createUser.schema"));
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
const userController = new UserController_1.UserController();
userRoutes.post('', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: createUser_schema_1.default }), userController.create);
userRoutes.get('', userController.list);
userRoutes.post('/login', userController.authenticate);
userRoutes.get('/:id', userController.find);
userRoutes.delete('/:id', userController.delete);
userRoutes.put('/:id', userController.update);
