import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "filmes" })
export class PgFilm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "titulo", nullable: true })
  title!: string;

  @Column({ name: "descricao", nullable: true })
  description!: string;

  @Column({ name: "diretor", nullable: true })
  director!: string;

  @Column({ name: "produtor", nullable: true })
  producer!: string;
}
