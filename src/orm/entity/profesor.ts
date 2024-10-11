import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Departamento } from "./departamento";
import { Automovil } from "./automovil";

@Entity({ name: "profesores" })
export class Profesor {

  @PrimaryColumn({ name: "rut" })
  rut: string;

  @Column({ name: "nombres" })
  nombres: string;

  @Column({ name: "apellidos" })
  apellidos: string;

  @Column({ name: "direccion" })
  direccion: string;

  @Column({ name: "telefonos" })
  telefonos: string;

  @Column({ name: "id_departamento" })
  idDepartamento: number;

  @ManyToOne(() => Departamento)
  @JoinColumn({ name: "id_departamento" })
  departamento: Departamento;

  @OneToOne(() => Automovil, (automovil) => automovil.profesor)
  automovil: Automovil;

}
