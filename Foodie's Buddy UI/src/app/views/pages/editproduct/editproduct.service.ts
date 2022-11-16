import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EditproductService {
  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private http:HttpClient) { }

  getProduct(id :any): Observable<any> {
 return this.http.get(this.apiurl+'view_product/'+id);
  }

  editproduct(id:any,body:any) {
    console.log("Body: ", body);
    
    return this.http.put(this.apiurl+'update_product/'+id,body);
  }
}
