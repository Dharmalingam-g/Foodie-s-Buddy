import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private Url = '/api/';
  private apiurl = this.Url + 'user/';

  constructor(private http: HttpClient) { }
  viewprofile() :
  Observable<any> {
    console.log("HI");
    
  return this.http.get(this.apiurl+ 'view_profile')
}
}
