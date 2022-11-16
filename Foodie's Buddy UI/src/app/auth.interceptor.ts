import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request || !request.url) {
      return next.handle(request);
    }

    let authReq = request;
    let accessToken;
    console.log(request);
    console.log(localStorage.getItem('auth-token'));
    let val = JSON.parse(localStorage.getItem('auth-token') || '{}');
    console.log("val:",val);
    let currentUser;
    if (Object.keys(val).length !== 0) {
      currentUser = val.token;
    } else {
      return next.handle(request);
    }

    if (currentUser) {
      accessToken = currentUser;
    }

    console.log('accesstoken: ', accessToken);
    if (accessToken != null) {
      authReq = this.addTokenHeader(request, accessToken);
    }

    console.log('request ', authReq);
    return next.handle(authReq);
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      withCredentials: true,
      setHeaders: {
        authtoken: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });
  }
}