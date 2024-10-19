import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoController } from './controller/departamento.controller';
import { DepartamentoService } from './service/departamento.service';
import { Departamento } from 'src/orm/entity/departamento';
import { ProfesorController } from './controller/profesor.controller';
import { ProfesorService } from './service/profesor.service';
import { Profesor } from 'src/orm/entity/profesor';
import { Automovil } from 'src/orm/entity/automovil';

@Module({
  imports: [ TypeOrmModule.forFeature([ Departamento, Profesor, Automovil ]) ],
  controllers: [ DepartamentoController, ProfesorController ],
  providers: [ DepartamentoService, ProfesorService ],
})
export class ProfesoresModule {}
