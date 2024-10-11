import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Profesor } from "./profesor";

@Entity({ name: "automovil" })
export class Automovil {

  @PrimaryColumn({ name: "patente" })
  patente: string;

  @Column({ name: "color" })
  color: string;

  @Column({ name: "rut_profesor" })
  rutProfesor: string;

  @OneToOne(() => Profesor)
  @JoinColumn({ name: "rut_profesor" })
  profesor: Profesor;

}
