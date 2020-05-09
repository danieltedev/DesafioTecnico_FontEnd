import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { take, catchError } from 'rxjs/operators';
import { Access } from '../model/access';
import { PaginationSptring } from '../model/pagination-spring';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private param: HttpParams;

  constructor(
    private http: HttpClient
  ) { }

  // pagination(page: number, limit: number): Observable<Array<any>> {
  //   const param = new HttpParams({ fromString: `page=${page}&size=${limit}` });
  //   return this.http.get<Array<any>>(environment.access, { params: param }).pipe(take(1), catchError(e => throwError(e)));
  // }

  pagination(page: number, limit: number, access?: Access): Observable<PaginationSptring> {
    const param = null;
    if (access) {
      const queryString = Object.keys(access).map(key => key + '=' + access[key]).join('&');
      this.param = new HttpParams({ fromString: `${queryString}&page=${page}&size=${limit}` });
    } else {
      this.param = new HttpParams({ fromString: `page=${page}&size=${limit}` });
    }
    return this.http.get<PaginationSptring>(environment.access, { params: this.param }).pipe(take(1), catchError(e => throwError(e)));
  }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(environment.access, formData).pipe(take(1), catchError(e => throwError(e)));
  }
}
