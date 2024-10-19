import { ApiProperty } from "@nestjs/swagger";
import { GetAutomovilDto } from "./get-automovil.dto";
import { GetDepartamentoDto } from "./get-departamento.dto";

export class GetProfesorDto {

  @ApiProperty()
  rut: string;

  @ApiProperty()
  nombres: string;

  @ApiProperty()
  apellidos: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  telefonos: string;

  @ApiProperty()
  departamento: GetDepartamentoDto;

  @ApiProperty()
  automovil: GetAutomovilDto;

}
