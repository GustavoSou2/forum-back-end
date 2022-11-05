"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
require("reflect-metadata");
const path_1 = require("path");
const dotenv_flow_1 = require("dotenv-flow");
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("../../database/database"));
(0, dotenv_flow_1.config)({ silent: true });
const databaseConfig = (0, database_1.default)();
const dataSource = new typeorm_1.DataSource({
    migrationsTableName: 'migrations',
    migrationsRun: true,
    type: "mysql",
    host: "us-cdbr-east-06.cleardb.net",
    port: 3306,
    username: "beb80608431dfb",
    password: "af01bd07",
    database: "heroku_3072c51389dd840",
    synchronize: true,
    logging: true,
    entities: [
        (0, path_1.resolve)(__dirname, '..', '..', 'modules/**/infra/typeorm/entities/**/*.{ts,js}'),
        (0, path_1.resolve)(__dirname, 'entities/*.{ts,js}')
    ],
    migrations: [(0, path_1.resolve)(__dirname, 'migrations/*.{ts,js}')],
    subscribers: [],
});
async function createConnection() {
    return dataSource.initialize();
}
exports.createConnection = createConnection;
exports.default = dataSource;
