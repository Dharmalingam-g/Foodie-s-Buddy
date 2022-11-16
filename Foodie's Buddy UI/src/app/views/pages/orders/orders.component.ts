import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {OrdersService} from './orders.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private myservice:OrdersService) { }

  ngOnInit(): void {
    this.vieworders();
  }

  vieworders() {
    this.myservice.vieworders().subscribe({
      next:(data)=> {
        console.log(data);
        this.orders=data;
        console.log(this.orders);
        },
        error: err=> {console.log(err);
        }
    })

  }

}
