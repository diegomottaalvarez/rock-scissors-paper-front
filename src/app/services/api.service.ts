import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

export enum STATUS_CODES_ENUM {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    header: HttpHeaders = this.getHeaders()
  ): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {
      headers: header,
      params: params,
    });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  put(
    path: string,
    body: Object = {},
    header: HttpHeaders = this.getHeaders()
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  patch(
    path: string,
    body: Object = {},
    header: HttpHeaders = this.getHeaders()
  ): Observable<any> {
    return this.http.patch(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  post(
    path: string,
    body: Object = {},
    header: HttpHeaders = this.getHeaders()
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  delete(
    path: string,
    header: HttpHeaders = this.getHeaders()
  ): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }
}
