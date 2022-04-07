import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OrderHistory } from 'src/models/order-history'; 

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {  
    private orderUrl = 'http://localhost:8090/api/v1/purchase';
  
    constructor(private httpClient: HttpClient) { }
  
    getOrderHistory(): Observable<GetResponseOrderHistory> {
  
      // need to build URL based on the customer email

      return this.httpClient.get<GetResponseOrderHistory>(this.orderUrl);
    }
  }
  
  interface GetResponseOrderHistory {
    _embedded: {
      orders: OrderHistory[];
    }
  }
  
