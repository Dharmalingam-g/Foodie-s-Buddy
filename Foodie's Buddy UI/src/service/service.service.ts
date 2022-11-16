import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/product/view_products')
  }
 
  createorder(id:any){
    return this.http.get('http://localhost:3000/api/admin/view_product/'+id)
  }
createorders(body:any ){
  return this.http.post('http://localhost:3000/api/user/create_orders/',body,{
    observe: 'body',
  });
}


}


