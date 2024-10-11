import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Estudiante } from "./estudiante";

@Entity({ name: "deporte" })
export class Deporte {

  @PrimaryColumn({ name: "id" })
  id: number;

  @Column({ name: "nombre" })
  nombre: string;

  // @ManyToMany(() => Estudiante)
  // @JoinTable({
  //   name: "estudiante_deporte",
  //   joinColumn: { name: "id_deporte", referencedColumnName: "id" },
  //   inverseJoinColumn: { name: "rut_estudiante", referencedColumnName: "rut" }
  // })
  @ManyToMany(() => Estudiante, (estudiante) => estudiante.deportes)
  estudiantes: Estudiante[];

}
