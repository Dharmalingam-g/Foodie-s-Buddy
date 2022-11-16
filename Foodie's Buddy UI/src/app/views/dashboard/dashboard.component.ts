import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ServiceService } from 'src/service/service.service'
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { IconSetService } from '@coreui/icons-angular';
import { AdminloginService } from '../pages/login/adminlogin/adminlogin.service'
import { Router } from '@angular/router';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';
import { ToastrService } from 'ngx-toastr';
interface IUser {

  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any;
  product :any;
  currentActive = JSON.parse(localStorage.getItem('auth-token') || '{}')
  currentActiveRole: any;

  constructor(
    private ServiceService: ServiceService, public iconSet: IconSetService, private myservice: AdminloginService, private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.currentActiveRole = this.currentActive.role;
    this.onStart();
  }


  onStart() {
    this.ServiceService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }
  editproduct(id: string) {
    this.router.navigate(['/pages/editproduct', id])
  }

  deleteproduct(id: any) {
    this.myservice.deleteoneproduct(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.onStart();
        this.toastr.error("deleted successfully")

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createorder(id: any) {
    this.ServiceService.createorder(id).subscribe({
      next: (data:any) =>{
        this.product=data;
        this.router.navigate(['/pages/createorder/',id])
      },
      error:error =>{ console.log(error);}
      })
    }


}


