import { Module } from '@nestjs/common';
import { DepartamentoController } from './controller/departamento.controller';
import { DepartamentoService } from './service/departamento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from 'src/orm/entity/departamento';

@Module({
  imports: [ TypeOrmModule.forFeature([ Departamento ]) ],
  controllers: [ DepartamentoController ],
  providers: [ DepartamentoService ],
})
export class UniversidadModule {}
