import { Component } from '@angular/core';

import { AdminnavItems } from './_nav';
import { UsernavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems:any;
  currentUser = JSON.parse(localStorage.getItem('auth-token') || '{}')
  currentUserRole: any;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
  ngOnInit(): void {
    this.currentUserRole = this.currentUser.role;
    if(this.currentUserRole === 'admin'){
    this.navItems = AdminnavItems;
    } else if(this.currentUserRole === 'user'){
    this.navItems = UsernavItems;
    }
    }
  }

