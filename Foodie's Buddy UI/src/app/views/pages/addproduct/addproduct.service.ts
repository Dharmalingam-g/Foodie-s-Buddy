import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private http: HttpClient) { }
  
  addproduct(body:any) {
    return this.http.post(this.apiurl + 'insert_product',body, {
      observe: 'body',
    } )
  }
}
