import { Module } from '@nestjs/common';
import { AsincronoModule } from './asincrono/asincrono.module';
import { OrmModule } from './orm/orm.module';
import { SqlModule } from './sql/sql.module';
import { UniversidadModule } from './universidad/universidad.module';

@Module({
  imports: [
    AsincronoModule,
    SqlModule,
    OrmModule,
    UniversidadModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
