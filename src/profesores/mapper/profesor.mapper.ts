import { Profesor } from "src/orm/entity/profesor";
import { CreateProfesorDto } from "../dto/create-profesor.dto";
import { GetProfesorDto } from "../dto/get-profesor.dto";
import { AutomovilMapper } from "./automovil.mapper";
import { DepartamentoMapper } from "./departamento.mapper";


export class ProfesorMapper {

  static entityToDto(entity: Profesor) : GetProfesorDto {
    const dto = new GetProfesorDto();
    dto.rut = entity.rut;
    dto.nombres = entity.nombres;
    dto.apellidos = entity.apellidos;
    dto.direccion = entity.direccion;
    dto.telefonos = entity.telefonos;
    if (entity.departamento) {
      dto.departamento = DepartamentoMapper.entityToDto(entity.departamento);
    }
    if (entity.automovil) {
      dto.automovil = AutomovilMapper.entityToDto(entity.automovil);
    }
    return dto;
  }

  static entityListToDtoList(entityList: Profesor[]) : GetProfesorDto[] {
    return entityList.map((e) => ProfesorMapper.entityToDto(e));
  }

  static createDtoToEntity(dto: CreateProfesorDto) : Profesor {
    const entity = new Profesor();
    entity.rut = dto.rut;
    entity.nombres = dto.nombres;
    entity.apellidos = dto.apellidos;
    entity.direccion = dto.direccion;
    entity.telefonos = dto.telefonos;
    entity.idDepartamento = dto.idDepartamento;
    return entity;
  }

}