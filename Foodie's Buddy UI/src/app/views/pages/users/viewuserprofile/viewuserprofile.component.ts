import { Component, OnInit } from '@angular/core';
import {ViewuserprofileService} from './viewuserprofile.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuserprofile',
  templateUrl: './viewuserprofile.component.html',
  styleUrls: ['./viewuserprofile.component.scss']
})
export class ViewuserprofileComponent implements OnInit {
  profile:any;
  id:any;

  constructor(private myservice:ViewuserprofileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewuserprofile(this.id);
  }

  viewuserprofile(id: any) {

    this.myservice.viewuserprofile(id).subscribe( {
      next:(data)=> {
        console.log(data);
        this.profile=data;
        console.log(this.profile);                
      
      },
      error:err=> {console.log(err)}

    })
  }
}
