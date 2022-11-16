import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreateorderService {
  private Url = '/api/';
  private apiurl = this.Url + 'user/';

  constructor(private http: HttpClient) { }

  createorder(body:any) {
    return this.http.post(this.apiurl+ 'create_orders',body,{observe: 'body'})
  
  }
}
