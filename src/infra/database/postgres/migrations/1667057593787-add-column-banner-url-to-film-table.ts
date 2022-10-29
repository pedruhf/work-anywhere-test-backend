import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnBannerUrlToFilmTable1667057593787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("filmes", new TableColumn({
      name: "banner_url",
      type: "varchar",
      isNullable: false
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("filmes", "banner_url");
  }
}
