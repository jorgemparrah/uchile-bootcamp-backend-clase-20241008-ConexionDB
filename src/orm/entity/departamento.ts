import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Profesor } from "./profesor";
import { Curso } from "./curso";

@Entity({ name: "departamentos" })
export class Departamento {

  @PrimaryColumn({ name: "id" })
  id: number;

  @Column({ name: "area" })
  area: string;

  @OneToMany(() => Profesor, (profesor) => profesor.departamento)
  profesores: Profesor[];

  @OneToMany(() => Curso, (curso) => curso.departamento)
  cursos: Curso[];

}
