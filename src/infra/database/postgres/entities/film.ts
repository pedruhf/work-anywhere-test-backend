import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "filmes" })
export class PgFilm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "titulo", nullable: false })
  title!: string;

  @Column({ name: "descricao", nullable: false })
  description!: string;

  @Column({ name: "banner_url", nullable: false })
  bannerUrl!: string;

  @Column({ name: "diretor", nullable: false })
  director!: string;

  @Column({ name: "produtor", nullable: false })
  producer!: string;
}
