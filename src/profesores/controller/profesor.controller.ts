import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfesorService } from '../service/profesor.service';
import { CreateProfesorDto } from '../dto/create-profesor.dto';
import { GetProfesorDto } from '../dto/get-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  async create(@Body() createProfesorDto: CreateProfesorDto): Promise<GetProfesorDto> {
    return await this.profesorService.create(createProfesorDto);
  }

  @Get()
  async findAll() : Promise<GetProfesorDto[]> {
    return await this.profesorService.findAll();
  }

  @Get(':rut')
  async findOne(@Param('rut') rut: string) : Promise<GetProfesorDto> {
    return await this.profesorService.findOne(rut);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfesorDto: UpdateProfesorDto) {
  //   return this.profesorService.update(+id, updateProfesorDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<GetProfesorDto> {
    return await this.profesorService.remove(+id);
  }
}
