import { Module } from '@nestjs/common';
import { ConexionController } from './controller/conexion.controller';
import { ConexionService } from './service/conexion.service';

@Module({
  imports: [],
  controllers: [
    ConexionController
  ],
  providers: [
    ConexionService
  ],
})
export class SqlModule {}
