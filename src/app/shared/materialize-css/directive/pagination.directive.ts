import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pagination } from '../interfaces/pagination';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { Util } from '../../util/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-pagination]'
})
export class PaginationDirective implements OnInit, AfterViewInit, OnChanges {

  private paginationValue: Pagination;
  private paginas: number;
  private liFirstChild: Element;
  private liLastChild: Element;
  private listLiAdd: Array<Element> = [];
  private pageElement = 5;

  @Output('m-pagination')
  private paginationChange = new EventEmitter<Pagination>();

  @Input('m-pagination')
  get pagination(): Pagination {
    return this.paginationValue;
  }

  set pagination(pagination: Pagination) {
    this.paginationValue = pagination;
    this.paginationChange.emit(this.paginationValue);
  }

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private route: Router,
    private htttp: HttpClient,
  ) { }

  private service(url: string, params: any): Observable<HttpResponse<Array<any>>> {
    return this.htttp.get<Array<any>>(url, { params: new HttpParams({ fromObject: params }), observe: 'response' })
      .pipe(take(1), catchError(e => throwError(e)));
  }

  private nextPage(): void {
    this.liLastChild.firstChild.addEventListener('click', (e: Event) => {
      const liActive = this.el.nativeElement.querySelector('.active');
      if ((Math.ceil(this.paginas) - 1) > liActive.querySelector('a').innerText) {
        const nextLiActive = liActive.nextSibling;
        const page = parseInt(nextLiActive.innerText, 0);
        this.render.removeClass(liActive, 'active');
        this.render.addClass(liActive, 'waves-effect');
        this.render.removeClass(nextLiActive, 'waves-effect');
        this.render.addClass(nextLiActive, 'active');
        this.route.navigateByUrl(this.pagination.routerNavegation + nextLiActive.innerText);
        this.disabledBtnNext(this.liLastChild, page);
        this.disabledBtnPrevious(this.liFirstChild, page);
        this.loadDataPage(this.pagination.params, page);
      }
    });
  }

  private previousPage(): void {
    this.liFirstChild.firstChild.addEventListener('click', (e: Event) => {
      const liActive = this.el.nativeElement.querySelector('.active');
      if (1 < liActive.querySelector('a').innerText) {
        const previousLiActive = liActive.previousSibling;
        const page = Util.isEmpty(previousLiActive.innerText) ? this.pagination.pagina - 1 : parseInt(previousLiActive.innerText, 0);
        this.render.removeClass(liActive, 'active');
        this.render.addClass(liActive, 'waves-effect');
        this.render.removeClass(previousLiActive, 'waves-effect');
        // this.render.addClass(previousLiActive, 'active');
        this.route.navigateByUrl(this.pagination.routerNavegation + page);
        this.disabledBtnNext(this.liLastChild, page);
        this.disabledBtnPrevious(this.liFirstChild, page);
        this.loadDataPage(this.pagination.params, page);

        if (this.pageElement > 5 && this.pageElement > this.pagination.pagina) {
          this.pageElement = this.pagination.pagina;
        }
      }
    });
  }

  private showPage(link: Element, pagination: Pagination): void {
    link.addEventListener('click', (e: Event) => {
      const liSetActive = link.parentElement;
      const liActive = this.el.nativeElement.querySelector('.active');
      const page = parseInt(link.textContent, 0);
      this.render.removeClass(liActive, 'active');
      this.render.addClass(liActive, 'waves-effect');
      this.render.removeClass(liSetActive, 'waves-effect');
      this.render.addClass(liSetActive, 'active');
      this.route.navigateByUrl(pagination.routerNavegation + link.textContent);
      this.disabledBtnNext(this.liLastChild, page);
      this.disabledBtnPrevious(this.liFirstChild, page);
      this.loadDataPage(this.pagination.params, page);
    });
  }

  private disabledBtnPrevious(btnPrevious: Element, actualPage: number): void {
    if (actualPage === 1) {
      this.render.addClass(btnPrevious, 'disabled');
      this.render.removeClass(btnPrevious, 'waves-effect');
    } else {
      this.render.addClass(btnPrevious, 'waves-effect');
      this.render.removeClass(btnPrevious, 'disabled');
    }
  }

  private disabledBtnNext(btnNext: Element, actualPage: number): void {
    if (actualPage === Math.ceil(this.paginas)) {
      this.render.addClass(btnNext, 'disabled');
      this.render.removeClass(btnNext, 'waves-effect');
    } else {
      this.render.addClass(btnNext, 'waves-effect');
      this.render.removeClass(btnNext, 'disabled');
    }
  }

  private createPage(paginas: number, pagination: Pagination, btnNext: Element): void {
    if (this.pageElement <= pagination.pagina) {
      this.pageElement = pagination.pagina + 5;
    }
    if (pagination.pagina === 1) {
      this.pageElement = 5;
      this.route.navigateByUrl(pagination.routerNavegation);
    }
    if (this.pageElement > Math.ceil(this.paginas)) {
      this.pageElement = Math.ceil(this.paginas) - 1;
    }
    Array(Math.ceil(this.pageElement)).fill(undefined).forEach((v, i) => {
      if (this.pageElement === 5 || i > this.pageElement - 7) {
        const item = i + 1;
        const li = this.render.createElement('li');
        const a = this.render.createElement('a');
        this.render.addClass(li, this.pagination.pagina === item ? 'active' : 'waves-effect');
        this.render.appendChild(li, a);
        this.render.appendChild(a, this.render.createText(item.toString()));
        this.render.insertBefore(this.el.nativeElement, li, btnNext);

        this.listLiAdd.push(li);

        this.showPage(a, pagination);
      }
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.nextPage();
    this.previousPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const pagination: Pagination = changes.pagination.currentValue;
    this.paginas = Util.isEmpty(pagination.totalPagina) ? pagination.totalItens / pagination.limite : pagination.totalPagina;
    this.liFirstChild = this.el.nativeElement.firstChild;
    this.liLastChild = this.el.nativeElement.lastChild;

    this.listLiAdd.forEach(e => {
      e.remove();
      // this.render.removeChild(this.el.nativeElement, e);
    });
    this.listLiAdd = [];

    if (this.paginas > 1) {
      this.createPage(5, this.pagination, this.liLastChild);
      this.disabledBtnNext(this.liLastChild, this.pagination.pagina);
      this.disabledBtnPrevious(this.liFirstChild, this.pagination.pagina);

      // this.render.removeClass(this.el.nativeElement, 'hide');
    } else {
      this.render.addClass(this.el.nativeElement, 'hide');
    }
  }

  private loadDataPage(params: any, page: number): void {
    console.log('loadDataPage');
    this.pagination.service.params[this.pagination.service.paramIndexArrayPage] = page;
    this.pagination.service.instance[this.pagination.service.method]
      .apply(this.pagination.service.instance, this.pagination.service.params)
      .subscribe(resp => {
        this.pagination.listaRetorno.next(resp);
      });
  }

}
