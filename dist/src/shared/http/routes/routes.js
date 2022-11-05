"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_routing_1 = require("../../../modules/user/infra/http/routes/user.routing");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/users', user_routing_1.userRoutes);
