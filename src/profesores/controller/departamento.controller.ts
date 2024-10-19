import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { PaginaDto } from 'src/commons/dto/pagina.dto';
import { CreateDepartamentoDto } from '../dto/create-departamento.dto';
import { GetDepartamentoDto } from '../dto/get-departamento.dto';
import { DepartamentoService } from '../service/departamento.service';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Post()
  async create(@Body() createDepartamentoDto: CreateDepartamentoDto) : Promise<GetDepartamentoDto> {
    const creado : GetDepartamentoDto = await this.departamentoService.create(createDepartamentoDto);
    return creado;
  }

  @Get()
  async findAll() : Promise<GetDepartamentoDto[]> {
    const resultado : GetDepartamentoDto[] = await this.departamentoService.findAll();
    return resultado;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetDepartamentoDto> {
    return await this.departamentoService.findOne(+id);
  }

  @ApiQuery({ name: 'area', required: false })
  @Get("pagina/:pagina/:cantidadPorPagina")
  async pagina(
    @Param("pagina") pagina: number,
    @Param("cantidadPorPagina") cantidadPorPagina: number,
    @Query("area") area: string
  ) : Promise<PaginaDto<GetDepartamentoDto>> {
    const resultado : PaginaDto<GetDepartamentoDto> = await this.departamentoService.pagina(+pagina, +cantidadPorPagina, area);
    return resultado;
  }

}
