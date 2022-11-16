import { Component, OnInit } from '@angular/core';
import{EditproductService} from './editproduct.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  id:any;
  product=' ';
  price=' ';
  stock=' ';
  rating=' ';

  updateinfo:any;

  constructor(
    private router:Router,
    private edit:EditproductService,
    private route:ActivatedRoute,
    private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log("Snapshot: ", this.id);
    
    this.onStart();
    
  }
  onStart() {

    this.edit.getProduct(this.id).subscribe ( {
      next: (data:any) => {
        console.log(data);
        this.product=data.product;
        this.price=data.price;
        this.stock=data.stock;
        this.rating=data.rating;        
      },
      error: (error)=> {
        console.log(error);
        }
      })
  }

  onSubmit(val:NgForm) {
    console.log("VAL:", val.form.value);
    
    this.updateinfo=val.form.value;
    console.log("UPDATEINFO: ", this.updateinfo);
    
    this.edit.editproduct(this.id,this.updateinfo).subscribe({
      next: (data:any) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
        this.toastr.success("Product Updated successfully")

        
      },
      error: (error)=> {
        console.log(error);
        }

    })
  }



}
