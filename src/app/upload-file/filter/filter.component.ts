import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Access } from '../../shared/model/access';
import { Pagination } from '../../shared/materialize-css/interfaces/pagination';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccessService } from '../../shared/service/access.service';
import { environment } from '../../../environments/environment';
import { PaginationSptring } from '../../shared/model/pagination-spring';
import { Util } from '../../shared/util/util';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  accessList: Array<Access>;
  pagination: Pagination;
  private access: Access = {};

  constructor(
    private active: ActivatedRoute,
    private accessService: AccessService,
    private route: Router,
  ) { }

  focusoutIp(event: Event) {
    this.access.ip = (event.target as any).value;
    if (this.pagination.service.params.length < 3) {
      this.pagination.service.params.push(this.access);
    }
    this.accessService.pagination(0, 10, this.access)
      .subscribe((resp) => {
        this.accessList = resp.content;
        this.pagination.totalItens = resp.totalElements;
        this.pagination.pagina = resp.number + 1;
        this.pagination.service.params = Array.of<any>(0, 10, this.access);
        this.pagination.totalPagina = resp.totalPages;
        this.pagination = Object.assign({}, this.pagination);
      });
  }

  focusoutDateInit(event: Event) {
    const value = (event.target as any).value.length;
    if (this.pagination.service.params.length < 3) {
      this.pagination.service.params.push(this.access);
    }
    if ((event.target as any).value.length === 16) {
      this.access.dataInicio = Util.isEmpty(value) ? null : `${(event.target as any).value}:00.00`;
      this.accessService.pagination(0, 10, this.access)
        .subscribe((resp) => {
          this.accessList = resp.content;
          this.pagination.totalItens = resp.totalElements;
          this.pagination.pagina = resp.number + 1;
          this.pagination.service.params = Array.of<any>(0, 10, this.access);
          this.pagination.totalPagina = resp.totalPages;
          this.pagination = Object.assign({}, this.pagination);
        });
    }
  }

  focusoutDateEnd(event: Event) {
    const value = (event.target as any).value.length;
    if (this.pagination.service.params.length < 3) {
      this.pagination.service.params.push(this.access);
    }
    if (value.length === 16 || Util.isEmpty(value)) {
      this.access.dataFim = Util.isEmpty(value) ? null : `${(event.target as any).value}:00.00`;
      this.accessService.pagination(0, 10, this.access)
        .subscribe((resp) => {
          this.accessList = resp.content;
          this.pagination.totalItens = resp.totalElements;
          this.pagination.pagina = resp.number + 1;
          this.pagination.service.params = Array.of<any>(0, 10, this.access);
          this.pagination.totalPagina = resp.totalPages;
          this.pagination = Object.assign({}, this.pagination);
        });
    }
  }

  ngOnInit() {
    const page = Util.isEmpty(this.active.snapshot.paramMap.get('page')) ? 0 :
      (this.active.snapshot.paramMap.get('page') as any as number) - 1;
    const paginationSpring: PaginationSptring = this.active.snapshot.data.access;
    this.pagination = {
      url: environment.access,
      limite: 10,
      pagina: page + 1,
      totalItens: paginationSpring.totalElements,
      totalPagina: paginationSpring.totalPages,
      service: {
        instance: this.accessService,
        method: 'pagination',
        params: Array.of<any>(page, 10, this.access),
        paramIndexArrayPage: 0,
        paramIndexArraySize: 1
      },
      listaRetorno: new EventEmitter<Array<Access>>(),
      routerNavegation: '/upload-file/filter/'
    };
    this.accessList = this.active.snapshot.data.access.content;
    this.pagination.listaRetorno.subscribe((resp: PaginationSptring) => {
      this.accessList = resp.content;
      this.pagination.pagina = resp.pageable.pageNumber;
      this.pagination.service.params = Array.of<any>(resp.pageable.pageNumber, resp.pageable.pageSize, this.access);
      this.pagination = Object.assign({}, this.pagination);
    });
  }

}
