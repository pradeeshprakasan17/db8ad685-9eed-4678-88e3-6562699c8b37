import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/models/order-history';
import { OrderHistoryService } from 'src/services/order-history.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
    storage: any = sessionStorage;
  
    constructor(private orderHistoryService: OrderHistoryService) { }
  
    ngOnInit(): void {
      this.handleOrderHistory();
    }
  
    handleOrderHistory(): void {
  
      // read the user's email address from browser storage
      const theEmail = JSON.parse(this.storage.getItem());
  
      // retrieve data from the service
      this.orderHistoryService.getOrderHistory().subscribe(
        data => {
          this.orderHistoryList = data._embedded.orders;
        }
      );
    }
  
  }