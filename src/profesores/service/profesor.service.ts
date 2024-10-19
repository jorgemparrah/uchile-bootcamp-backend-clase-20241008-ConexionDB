import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from '../dto/create-profesor.dto';
import { GetProfesorDto } from '../dto/get-profesor.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Profesor } from 'src/orm/entity/profesor';
import { DataSource, Repository } from 'typeorm';
import { ProfesorMapper } from '../mapper/profesor.mapper';
import { Automovil } from '../../orm/entity/automovil';
import { AutomovilMapper } from '../mapper/automovil.mapper';

@Injectable()
export class ProfesorService {

  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>,
    @InjectRepository(Automovil) private readonly automovilRepository: Repository<Automovil>,
  ) {}

  async create(createProfesorDto: CreateProfesorDto): Promise<GetProfesorDto> {
    const entidad : Profesor = ProfesorMapper.createDtoToEntity(createProfesorDto);
    const entidadAutomovil : Automovil = AutomovilMapper.createDtoToEntity(createProfesorDto);
    // entidadAutomovil.rutProfesor = "createProfesorDto.rut";

    const em = this.profesorRepository.manager;
    try {
      // await this.profesorRepository.save(entidad);
      // await this.automovilRepository.save(entidadAutomovil);
      await em.transaction(async transactionalEntityManager => {
        await transactionalEntityManager.save<Profesor>(entidad);
        await transactionalEntityManager.save<Automovil>(entidadAutomovil);
      });
    } catch(e) {
      console.log(e);
      throw Error('Error al guardar el profesor');
    }
    return this.findOne(createProfesorDto.rut);
  }

  async findAll(): Promise<GetProfesorDto[]> {
    const lista : Profesor[] = await this.profesorRepository.find({
      relations: {
        departamento: true,
        automovil: true
      }
    });
    return ProfesorMapper.entityListToDtoList(lista);
  }

  async findOne(rut: string): Promise<GetProfesorDto> {
    const guardado : Profesor = await this.profesorRepository.findOne({
      where: {
        rut: rut
      },
      relations: {
        departamento: true,
        automovil: true
      }
    });
    return ProfesorMapper.entityToDto(guardado);
  }

  // update(id: number, updateProfesorDto: UpdateProfesorDto) {
  //   return `This action updates a #${id} profesor`;
  // }

  async remove(id: number): Promise<GetProfesorDto> {
    return null;
  }
}
