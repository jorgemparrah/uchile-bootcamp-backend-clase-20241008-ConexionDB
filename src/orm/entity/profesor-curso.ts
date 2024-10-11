import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Curso } from "./curso";
import { Profesor } from "./profesor";

@Entity({ name: "profesor_curso" })
export class ProfesorCurso {

  @PrimaryColumn({ name: "rut_profesor" })
  rutProfesor: string;

  @PrimaryColumn({ name: "id_curso" })
  idCurso: number;

  @PrimaryColumn({ name: "semestre" })
  semestre: string;

  @ManyToOne(() => Profesor)
  @JoinColumn({ name: "rut_profesor" })
  profesor: Profesor;

  @ManyToOne(() => Curso)
  @JoinColumn({ name: "id_curso" })
  curso: Curso;

}
