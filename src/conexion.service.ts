import { Injectable, NotFoundException } from '@nestjs/common';
import { EstudianteDto } from './estudiante.dto';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { waitForDebugger } from 'inspector';

@Injectable()
export class ConexionService {

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async obtenerEstudiantes() : Promise<EstudianteDto[]> {
    const listaEstudiantes : EstudianteDto[] = [];
    const instruccion = "SELECT rut, nombre_completo, direccion, telefonos FROM estudiantes;";
    /*
    const promesa = this.dataSource.query(instruccion);
    -- OTRAS INSTRUCCIONES EN PARALELO
    const resultado = await promesa;
    */
    const resultado : any[] = await this.dataSource.query(instruccion);
    for (const fila of resultado) {
      const dto= new EstudianteDto();
      dto.rut = fila.rut;
      dto.nombreCompleto = fila.nombre_completo;
      dto.direccion = fila.direccion;
      dto.telefonos = fila.telefonos;
      listaEstudiantes.push(dto);
    }
    return listaEstudiantes;
  }

  async buscarEstudiantePorRut(rut : string) : Promise<EstudianteDto> {
    const instruccion = `SELECT rut, nombre_completo, direccion, telefonos FROM estudiantes WHERE rut = '${rut}'`;

    const resultado : any[] = await this.dataSource.query(instruccion);
    if (resultado.length == 0) {
      throw new NotFoundException("No se encontró el estudiante con el rut indicado");
    }
    const dto= new EstudianteDto();
    dto.rut = resultado[0].rut;
    dto.nombreCompleto = resultado[0].nombre_completo;
    dto.direccion = resultado[0].direccion;
    dto.telefonos = resultado[0].telefonos;
    return dto;
  }

}
