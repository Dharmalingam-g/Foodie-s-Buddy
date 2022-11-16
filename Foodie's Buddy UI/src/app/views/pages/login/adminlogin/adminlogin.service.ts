import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private _http: HttpClient) { }
  adminlogin(body: any) {
    return this._http.post(this.apiurl + 'admin_login', body, {
      observe: 'body',
    });
  }
  deleteoneproduct(id: any) {
    return this._http.delete(this.apiurl + 'delete_product/' + id);
    }
    
   }

