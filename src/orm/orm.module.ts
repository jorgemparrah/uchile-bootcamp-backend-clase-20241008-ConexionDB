import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './entity/departamento';
import { Estudiante } from './entity/estudiante';
import { Profesor } from './entity/profesor';
import { Curso } from './entity/curso';
import { Calificacion } from './entity/calificacion';
import { ProfesorCurso } from './entity/profesor-curso';
import { Automovil } from './entity/automovil';
import { Deporte } from './entity/deporte';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'universidad',
      logging: true,
      entities: [
        Automovil,
        Calificacion,
        Curso,
        Departamento,
        Deporte,
        Estudiante,
        Profesor,
        ProfesorCurso,
      ]
    }),
    OrmModule
  ],
})
export class OrmModule {

}
