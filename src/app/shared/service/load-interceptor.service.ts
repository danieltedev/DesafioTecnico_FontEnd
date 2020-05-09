import { Injectable, EventEmitter } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadInterceptorService implements HttpInterceptor {

  static status: EventEmitter<boolean> = new EventEmitter<boolean>();

  private init = 0;
  private complete = 0;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.init === 0) {
      LoadInterceptorService.status.next(true);
    }
    this.init++;
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.complete++;
        }
      },
      (err: any) => {
        console.log('err');
        LoadInterceptorService.status.next(false);
      }),
      finalize<any>(() => {
        if (this.init === this.complete) {
          this.init = 0;
          this.complete = 0;
          LoadInterceptorService.status.next(false);
        }
      })
    );
  }
}
