import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export interface Pagination {

  url?: string;
  limite?: number;
  pagina?: number;
  totalItens?: number;
  totalPagina?: number;
  listaRetorno?: EventEmitter<Array<any>>;
  params?: {
    [param: string]: any,
    nameParamPage: string,
    nameParamLimit: string,
  };
  service?: {
    instance?: any,
    params?: Array<any>,
    method?: string,
    paramIndexArrayPage?: number,
    paramIndexArraySize?: number
  };
  routerNavegation?: string;
}
