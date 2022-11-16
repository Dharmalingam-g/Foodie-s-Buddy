import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ViewusersService {
  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private http: HttpClient) { }
  viewusers() :
    Observable<any>{
      console.log("HI");
      
    return this.http.get(this.apiurl+ 'view_user')
  }
  deleteuser(id: any) {
    return this.http.delete(this.apiurl + 'delete_user/' + id);
    }
   

}
