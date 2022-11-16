import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ViewusersService} from '../viewusers.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit{
  users: any;
  currentActive = JSON.parse(localStorage.getItem('auth-token') || '{}')
  currentActiveRole: any;

  constructor(private myservice:ViewusersService,
    private Router: Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.currentActiveRole = this.currentActive.role;

    this.viewusers();
  }
 
viewusers() {
  this.myservice.viewusers().subscribe({ 
    next: (data) => {
      console.log(data);
      this.users = data;
      console.log(this.users); 
    },
    error: err => {console.log(err);
    }
  })
}
deleteuser(id: any) {
  this.myservice.deleteuser(id).subscribe({
  next: (data: any) => {
  console.log(data);
  this.toastr.error("User Deleted successfully")

  },
  error: (err) => {
  console.log(err);
  },
  });  this.viewusers();

  }
  profile(id:any) {
    this.Router.navigate(['/pages/viewprofile', id])

  }

}

