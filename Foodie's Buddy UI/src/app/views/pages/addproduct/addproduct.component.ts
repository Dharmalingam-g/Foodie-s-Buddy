import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddproductService } from './addproduct.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent  {

  productForm: FormGroup;
  successMessage = '';
  
  constructor(private myservice: AddproductService, private router: Router,  private toastr:ToastrService) { 
    this.productForm = new FormGroup({
      product: new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required),
      stock: new FormControl(null,Validators.required),
      rating: new FormControl(null,Validators.required)
    });
  }
  addproduct() {
    console.log("allproduct: ",this.productForm.value);
    if (this.productForm.valid) {
    this.myservice.addproduct(this.productForm.value).subscribe( {
      next: (data) => {
        this.successMessage='Product added successfully';
        this.toastr.success("Product Added successfully")

        this.router.navigate(['/dashboard'])

        console.log(data);
      },
      error: (error) => {this.successMessage = 'Some error';
      console.log(error);
    }

    });

  }

 

}
}
