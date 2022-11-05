import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1667260413913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
