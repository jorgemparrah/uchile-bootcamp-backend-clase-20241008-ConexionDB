import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexionController } from './conexion.controller';
import { ConexionService } from './conexion.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'universidad'
    })
  ],
  controllers: [AppController, ConexionController],
  providers: [AppService, ConexionService],
})
export class AppModule {}
