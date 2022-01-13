import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1642034419919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "product",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "SKU",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "float"
                    },
                    {
                        name: "image",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "the_amount",
                        type: "integer"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCategory",
                        referencedTableName: "category",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product")
    }

}
