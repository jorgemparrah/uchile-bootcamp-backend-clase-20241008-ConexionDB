export class PaginaDto<T> {

  totalRegistros: number;
  totalPaginas: number;
  nroPagina: number;
  cantidadPorPagina: number;
  datos: T[]

}
