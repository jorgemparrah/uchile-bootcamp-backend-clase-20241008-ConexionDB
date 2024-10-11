import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Departamento } from "./departamento";

@Entity({ name: "cursos" })
export class Curso {

  @PrimaryColumn({ name: "id" })
  id: number;

  @Column({ name: "nombre" })
  nombre: string;

  @Column({ name: "id_departamento" })
  idDepartamento: number;

  @ManyToOne(() => Departamento)
  @JoinColumn({ name: "id_departamento" })
  departamento: Departamento;

}
