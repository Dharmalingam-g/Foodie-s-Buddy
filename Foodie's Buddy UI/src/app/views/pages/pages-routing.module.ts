import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewusersComponent } from './users/viewusers/viewusers.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewuserprofileComponent } from './users/viewuserprofile/viewuserprofile.component';
import { ProfileComponent } from './profile/profile.component';
import {CreateorderComponent} from './createorder/createorder.component'
import {EditproductComponent} from './editproduct/editproduct.component'
const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'viewusers',
    component: ViewusersComponent,
    data: {
      title: 'Users Page'
    }
  },
  {
    path: 'vieworders',
    component: OrdersComponent,
    data: {
      title: 'Orders Page'
    }
  },
  {
    path: 'viewprofile/:id',
    component: ViewuserprofileComponent,
    data: {
      title: 'User profile'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile Page'
    }
  },
  {
    path: 'editproduct/:id',
    component: EditproductComponent,
    data: {
      title: 'Product Edit Page'
    }
  },

  {
    path: 'createorder/:id',
    component: CreateorderComponent,
    data: {
      title: 'Order Making Page'
    }
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
