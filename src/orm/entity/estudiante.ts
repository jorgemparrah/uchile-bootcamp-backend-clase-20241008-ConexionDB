import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Deporte } from "./deporte";

@Entity({ name: "estudiantes" })
export class Estudiante {

  @PrimaryColumn({ name: "rut" })
  rut: string;

  @Column({ name: "nombre_completo" })
  nombreCompleto: string;

  @Column({ name: "fecha_nacimiento" })
  fechaNacimiento: Date;

  @Column({ name: "direccion" })
  direccion: string;

  @Column({ name: "telefonos" })
  telefonos: string;

  // @ManyToMany(() => Deporte, (deporte) => deporte.estudiantes)
  @ManyToMany(() => Deporte)
  @JoinTable({
    name: "estudiante_deporte",
    joinColumn: { name: "rut_estudiante", referencedColumnName: "rut" },
    inverseJoinColumn: { name: "id_deporte", referencedColumnName: "id" }
  })
  deportes: Deporte[];

}
