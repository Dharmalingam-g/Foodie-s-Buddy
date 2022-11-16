// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {

//   constructor() { }
// }
// /

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private Url = '/api/';
  private apiurl = this.Url + 'user/';
  constructor(private _http: HttpClient) {}
  submitRegister(body: any) {
    return this._http.post(this.apiurl + 'register_user',body ,{
      observe: 'body',
    });
  }
}