import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';
import { DataSource, In, LessThan, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Departamento } from 'src/orm/entity/departamento';
import { Estudiante } from 'src/orm/entity/estudiante';
import { Deporte } from 'src/orm/entity/deporte';

@Injectable()
export class DepartamentoService {

  constructor(
    @InjectRepository(Departamento) private readonly repository: Repository<Departamento>
  ) {}

  create(createDepartamentoDto: CreateDepartamentoDto) {
    return 'This action adds a new departamento';
  }

  async findAll(nroPagina: number, cantidadPorPagina: number) : Promise<string> {
    const nroPaginaValido = nroPagina - 1;
    const offset = cantidadPorPagina * nroPaginaValido;
    const totalRegistros : number = await this.repository.countBy({
      id: LessThan(5)
    });
    const resultado : Departamento[] = await this.repository.find({
      order: {
        area: "ASC",
        id: "DESC"
      },
      where: {
        id: In([1, 3, 5, 7, 9, 10, 50])
      },
      take: cantidadPorPagina,
      skip: offset
    });
    console.log({
      totalRegistros: totalRegistros,
      totalPaginas: Math.ceil(totalRegistros / cantidadPorPagina),
      nroPagina: nroPagina,
      cantidadPorPagina: cantidadPorPagina,
      datos: resultado
    });

    return `This action returns all departamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }

  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
