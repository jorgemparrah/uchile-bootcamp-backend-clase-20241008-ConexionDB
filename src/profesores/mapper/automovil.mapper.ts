import { Automovil } from "src/orm/entity/automovil";
import { GetAutomovilDto } from "../dto/get-automovil.dto";
import { CreateProfesorDto } from "../dto/create-profesor.dto";

export class AutomovilMapper {

  static entityToDto(entity: Automovil) : GetAutomovilDto {
    const dto = new GetAutomovilDto();
    dto.patente = entity.patente;
    dto.color = entity.color;
    return dto;
  }

  static entityListToDtoList(entityList: Automovil[]) : GetAutomovilDto[] {
    return entityList.map((e) => AutomovilMapper.entityToDto(e));
  }

  static createDtoToEntity(dto: CreateProfesorDto) : Automovil {
    const entity = new Automovil();
    entity.patente = dto.patenteAutomovil;
    entity.color = dto.colorAutomovil;
    entity.rutProfesor = dto.rut;
    return entity;
  }

}