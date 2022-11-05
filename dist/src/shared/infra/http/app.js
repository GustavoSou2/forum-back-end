"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const typeorm_1 = require("../typeorm");
const app = (0, express_1.default)();
exports.app = app;
(0, typeorm_1.createConnection)()
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Cannot connect to database'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
