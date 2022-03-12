import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service/cart.service';
import { Product } from '../product-service/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product :any =[];
public grandTotal !: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void{
    this.cartService.getProduct().subscribe((data:any)=>{
       this.product=data;
       this.grandTotal=this.cartService.getTotalPrice(this.product);
    });
  }
  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);
  }
  emptyCart()
  {
    this.cartService.removeAllCart();
  }

}
