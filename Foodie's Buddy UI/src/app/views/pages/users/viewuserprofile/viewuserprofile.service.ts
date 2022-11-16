import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ViewuserprofileService {
  private Url = '/api/';
  private apiurl = this.Url + 'admin/';

  constructor(private http: HttpClient) { }
  viewuserprofile(id:any) :
    Observable<any> {
      console.log("HI");
      
    return this.http.get(this.apiurl+ 'view_user/'+id)
  }
  // deleteuser(id: any) {
  //   return this.http.delete(this.apiurl + 'delete_user/' + id);
  //   }
  }

