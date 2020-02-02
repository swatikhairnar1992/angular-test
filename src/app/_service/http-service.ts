import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any | 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable({ providedIn: 'root' })
export class HttpService {

  public constructor(public http: HttpClient) { }

  public get<T>(url: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(`${environment.origin}/${url}`, options);
    /* .pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(err);
      })
    ); */
  }

  public post<T>(url: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(`${environment.origin}/${url}`, params, options);
    /* .pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(err);
      })
    ); */
  }

  public put<T>(url: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(`${environment.origin}/${url}`, params, options);
    /* .pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(err);
      })
    ); */
  }

  public delete<T>(url: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(`${environment.origin}/${url}`, options);
    /* .pipe(
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(err);
      })
    ); */
  }
}

export function HttpServiceCreator(http: HttpClient) {
  return new HttpService(http);
}
