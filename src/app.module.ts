import { Module } from '@nestjs/common';
import { AsincronoModule } from './asincrono/asincrono.module';
import { CommonsModule } from './commons/commons.module';
import { CursosModule } from './cursos/cursos.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { OrmModule } from './orm/orm.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { SqlModule } from './sql/sql.module';

@Module({
  imports: [
    AsincronoModule,
    SqlModule,
    OrmModule,
    ProfesoresModule,
    InscripcionesModule,
    CursosModule,
    EvaluacionesModule,
    CommonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
