import { ApiProperty } from "@nestjs/swagger";

export class CreateProfesorDto {

  @ApiProperty({ example: '12345678-9', description: 'RUT del profesor' })
  rut: string;

  @ApiProperty({ description: 'Nombres del profesor' })
  nombres: string;

  @ApiProperty({ description: 'Apellidos del profesor' })
  apellidos: string;

  @ApiProperty({ description: 'Dirección del profesor' })
  direccion: string;

  @ApiProperty({ description: 'Teléfonos del profesor' })
  telefonos: string;

  @ApiProperty({ description: 'ID del departamento al que pertenece el profesor' })
  idDepartamento: number;

  @ApiProperty({ description: 'Patente del automóvil del profesor' })
  patenteAutomovil: string;

  @ApiProperty({ description: 'Color del automóvil del profesor' })
  colorAutomovil: string;

}
