import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService  {

  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private http: HttpClient) { }
 
  
  vieworders() :
    Observable<any>{
      console.log("HI");
      
    return this.http.get(this.apiurl+ 'view_orders')
  }
  
}

