import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from 'src/orm/entity/departamento';
import { In, LessThan, Like, Repository } from 'typeorm';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { GetDepartamentoDto } from '../dto/get-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';
import { DepartamentoMapper } from '../mapper/departamento.mapper';
import { PaginaDto } from 'src/commons/dto/pagina.dto';

@Injectable()
export class DepartamentoService {

  constructor(
    @InjectRepository(Departamento) private readonly repository: Repository<Departamento>
  ) {}

  async create(createDepartamentoDto: CreateDepartamentoDto) : Promise<GetDepartamentoDto> {
    // BUSCAR PROXIMO ID
    const ultimoId = await this.repository.maximum('id');
    const proximoId = ultimoId + 1;

    // CREAR ENTIDAD
    const departamento = new Departamento();
    departamento.id = proximoId;
    departamento.area = createDepartamentoDto.area;

    // GUARDAR ENTIDAD
    const entidad = await this.repository.save(departamento);
    return DepartamentoMapper.entityToDto(entidad);
  }

  async pagina(nroPagina: number, cantidadPorPagina: number, area: string) : Promise<PaginaDto<GetDepartamentoDto>> {
    const nroPaginaValido = nroPagina - 1;
    const offset = cantidadPorPagina * nroPaginaValido;

    const queryWhere = {};
    if (area && area.length > 0) {
      queryWhere['area'] = Like(`%${area}%`);
    }

    const resultado : [ Departamento[], number ] = await this.repository.findAndCount({
      order: {
        area: "ASC",
        id: "DESC"
      },
      where: queryWhere,
      take: cantidadPorPagina,
      skip: offset
    });

    // CREANDO PAGINA DTO
    const paginaDto = new PaginaDto<GetDepartamentoDto>();
    paginaDto.totalRegistros = resultado[1];
    paginaDto.totalPaginas = Math.ceil(resultado[1] / cantidadPorPagina);
    paginaDto.nroPagina = nroPagina;
    paginaDto.cantidadPorPagina = cantidadPorPagina;
    paginaDto.datos = DepartamentoMapper.entityListToDtoList(resultado[0]);
    return paginaDto;
  }

  async findAll() : Promise<GetDepartamentoDto[]> {
    // CONSULTANDO TODOS LOS DEPARTAMENTOS
    const listaEntidades : Departamento[] = await this.repository.find();
    return DepartamentoMapper.entityListToDtoList(listaEntidades);
  }

  async findOne(id: number): Promise<GetDepartamentoDto> {
    // CONSULTANDO UN DEPARTAMENTO POR ID
    const entidad : Departamento = await this.repository.findOneBy({
      id: id
    });
    return DepartamentoMapper.entityToDto(entidad);
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) : Promise<string> {
    /* UPDATE SAVE */
    const departamentoExistente = await this.repository.findOneBy({
      id: 11
    });
    departamentoExistente.area = 'Medicina';
    const guardado = await this.repository.save(departamentoExistente);
    console.log(guardado);

    /* UPDATE SIMILAR A SQL */
    const reporte = await this.repository.update({
      id: 11
    }, {
      area: 'Medicina general'
    });
    console.log(reporte);

    return `This action updates a #${id} departamento`;
  }

  async remove(id: number) : Promise<string> {
    const departamentoEliminado2 = await this.repository.delete(10);
    console.log(departamentoEliminado2);

    const departamentoEliminado = await this.repository.delete({
      area: Like('Ing%')
    });
    console.log(departamentoEliminado);
    return `This action removes a #${id} departamento`;
  }
}
