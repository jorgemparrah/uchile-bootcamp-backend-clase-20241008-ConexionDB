import { BadRequestException, Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ConexionService } from './conexion.service';
import { EstudianteDto } from './estudiante.dto';

@Controller("consultas")
export class ConexionController {
  constructor(private readonly conexionService: ConexionService) {}

  @Get("estudiantes")
  async obtenerEstudiantes() : Promise<EstudianteDto[]> {
    const estudiantes : EstudianteDto[] = await this.conexionService.obtenerEstudiantes();
    return estudiantes;
  }

  @Get("estudiantes/:rut")
  async buscarEstudiantePorRut(@Param("rut") rut: string) : Promise<EstudianteDto> {
    const estudiante : EstudianteDto = await this.conexionService.buscarEstudiantePorRut(rut);
    return estudiante;
  }


}
