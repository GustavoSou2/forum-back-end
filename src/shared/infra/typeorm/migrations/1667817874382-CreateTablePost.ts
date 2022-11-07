import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePosts1667817874382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: 'id_posts',
                        type: 'varchar(36)',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar(355)',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'message',
                        type: 'text',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'has_links',
                        type: 'boolean',
                        isNullable: true,
                        default: false
                    },
                    {
                        name: 'has_images',
                        type: 'boolean',
                        isNullable: true,
                        default: false
                    },
                    {
                        name: 'has_tags',
                        type: 'boolean',
                        isNullable: true,
                        default: false
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
        await queryRunner.dropTable('posts')
    }

}
