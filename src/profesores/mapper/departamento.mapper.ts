import { Departamento } from "src/orm/entity/departamento";
import { GetDepartamentoDto } from "../dto/get-departamento.dto";

export class DepartamentoMapper {

  static entityToDto(entity: Departamento) : GetDepartamentoDto {
    const dto = new GetDepartamentoDto();
    dto.id = entity.id;
    dto.area = entity.area;
    return dto;
  }

  static entityListToDtoList(entityList: Departamento[]) : GetDepartamentoDto[] {
    return entityList.map((e) => DepartamentoMapper.entityToDto(e));
  }

}