import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddproductComponent } from 'src/app/views/pages/addproduct/addproduct.component';
import { ViewusersComponent } from '../pages/users/viewusers/viewusers.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
    data: {
      title: 'Add Product'
    }
  } ,
  {
    path: 'viewusers',
    component: ViewusersComponent,
    data: {
      title: 'View Users'
    }
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
