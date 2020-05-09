import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestForUserAgentService {

  constructor(private http: HttpClient) { }

  countRequestForUserAgent(): Observable<Array<any>> {
    return this.http.get<Array<any>>(environment.request_for_user_agent).pipe(take(1), catchError(e => throwError(e)));
  }
}
