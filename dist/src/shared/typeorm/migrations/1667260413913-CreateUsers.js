"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1667260413913 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1667260413913 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: 'id_user',
                    type: 'varchar(36)',
                    isPrimary: true
                },
                {
                    name: 'username',
                    type: 'varchar(255)',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar(255)',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar(255)',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'has_details',
                    type: 'boolean',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: "now()",
                    isNullable: true
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsers1667260413913 = CreateUsers1667260413913;
