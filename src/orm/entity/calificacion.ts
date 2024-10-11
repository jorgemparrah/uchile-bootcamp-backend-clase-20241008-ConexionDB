import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Curso } from "./curso";
import { Estudiante } from "./estudiante";

@Entity({ name: "calificaciones" })
export class Calificacion {

  @PrimaryColumn({ name: "rut_estudiante" })
  rutEstudiante: string;

  @PrimaryColumn({ name: "id_curso" })
  idCurso: number;

  @PrimaryColumn({ name: "semestre" })
  semestre: string;

  @Column({ name: "calificacion" })
  calificacion: number;

  @ManyToOne(() => Estudiante)
  @JoinColumn({ name: "rut_estudiante" })
  estudiante: Estudiante;

  @ManyToOne(() => Curso)
  @JoinColumn({ name: "id_curso" })
  curso: Curso;

}
