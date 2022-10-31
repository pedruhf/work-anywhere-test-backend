import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFilmsTable1666892577071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "filmes",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "titulo", type: "varchar", isNullable: false },
          { name: "descricao", type: "varchar", isNullable: false },
          { name: "diretor", type: "varchar", isNullable: false },
          { name: "produtor", type: "varchar", isNullable: false },
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("filmes");
    }

}
