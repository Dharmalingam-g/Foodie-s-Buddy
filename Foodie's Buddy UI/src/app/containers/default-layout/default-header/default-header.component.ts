import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from './headerservice.service'

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  public val: any;
  public showlogout: any;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private router: Router ,
    private display : HeaderService ){}


  ngOnInit(): void {
    this.ondisplay();
   }

  ondisplay() {
    this.display.showLogin();
    this.val = this.display.showlogin
    this.showlogout = !this.val;
  }
  logout(){
    localStorage.removeItem("auth-token");
    this.ondisplay()
    console.log("val: ", this.val);
    
    this.router.navigate(['/pages/dashboard'])
    // window.location.reload();
    // this.ondisplay();

    }
    viewprofile() {
      
    }
}
