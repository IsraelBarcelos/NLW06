import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1624489951457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
                default: "1234"
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn("users", "password")
    }

}
