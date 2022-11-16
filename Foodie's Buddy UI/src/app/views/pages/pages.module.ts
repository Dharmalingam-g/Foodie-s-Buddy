import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {
  AvatarModule,
  ButtonGroupModule,
 
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { ViewusersComponent } from './users/viewusers/viewusers.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewuserprofileComponent } from './users/viewuserprofile/viewuserprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CreateorderComponent } from './createorder/createorder.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    AddproductComponent,
    ViewusersComponent,
    OrdersComponent,
    ViewuserprofileComponent,
    ProfileComponent,
    EditproductComponent,
    CreateorderComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
  ]
})
export class PagesModule {
}





