import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from './profile.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile:any;
  id:any;
  // currentUser = JSON.parse(localStorage.getItem('auth-token') || '{}')
  constructor(private myservice:ProfileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.currentUser.currentUserId
    this.viewprofile()
  }
  viewprofile() {

    this.myservice.viewprofile().subscribe( {
      next:(data: any)=> {
        console.log(data);
        this.profile=data;
        console.log(this.profile);                
      
      },
      error:err=> {console.log(err)}
 

}
    )
}}