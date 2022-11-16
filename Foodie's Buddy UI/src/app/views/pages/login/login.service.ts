
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private Url = '/api/';
  private apiurl = this.Url + 'user/';

  constructor(private _http: HttpClient) {}

  login(body: any) {
    return this._http.post(this.apiurl + 'user_login', body, {
      observe: 'body',
    });
  }
}