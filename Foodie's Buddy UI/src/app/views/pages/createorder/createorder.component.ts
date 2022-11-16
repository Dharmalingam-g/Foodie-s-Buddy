import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.scss']
})
export class CreateorderComponent implements OnInit {
  id:any;
data:any;
  product:any;
  price : any;
  stock : any;
  rating : any;


  constructor(private myservice:ServiceService,
    private route:ActivatedRoute) { 
      
    }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewproduct();
  }

  viewproduct() {
    this.myservice.createorder(this.id).subscribe( {
      next:(data: any)=> {
        this.id=data._id;
        this.product=data.product;
        this.price=data.price;
        this.stock=data.stock;
        this.rating=data.rating;  
  },
  error:err=> {console.log(err)}
})
  
}
onSubmit(val:NgForm) {  
  this.data=val.form.value;
  console.log(this.data);
  
    this.myservice.createorders(this.data).subscribe({
    next: (data:any) => {
      console.log(data);
    },
    error: (error:any)=> {
      console.log(error);
      }

  })
}

}
