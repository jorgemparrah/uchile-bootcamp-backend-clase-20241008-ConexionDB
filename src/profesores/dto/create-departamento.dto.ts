import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartamentoDto {

  @ApiProperty({ description: 'Nombre del departamento', type: String })
  readonly area: string;

}
