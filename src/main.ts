import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UniversidadModule } from './universidad/universidad.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Descripcion de la API')
    .setVersion('1.0')
    .addTag('Ejemplos')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ UniversidadModule ], // OPCIONAL - PARA APLICAR A SOLO ALGUNOS MODULOS
  });
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PUERTO_NESTJS);
}
bootstrap();
