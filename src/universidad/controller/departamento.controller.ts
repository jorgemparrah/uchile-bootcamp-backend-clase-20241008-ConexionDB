import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartamentoService } from '../service/departamento.service';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { UpdateDepartamentoDto } from '../dto/update-departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  /*
  @Post()
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }
  */

  @Get(":pagina/:cantidadPorPagina")
  async findAll(
    @Param("pagina") pagina: number,
    @Param("cantidadPorPagina") cantidadPorPagina: number
  ) : Promise<string> {
    const resultado : string = await this.departamentoService.findAll(pagina, cantidadPorPagina);
    return resultado;
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(+id, updateDepartamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoService.remove(+id);
  }
  */
}
