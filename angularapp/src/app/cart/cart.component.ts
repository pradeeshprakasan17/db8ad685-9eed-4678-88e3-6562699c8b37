import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  
  public product :any =[];
  grandTotal:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void{
    this.cartService.getProduct().subscribe((data:any)=>{
       this.product=data;
       this.localCart();
       
    })
  }
  removeItem(product:any)
  {
    this.cartService.removeCartItem(product);
    this.localCart();
  }
  emptyCart()
  {
    this.cartService.removeAllCart();
  }
  
  localCart(){
    this.grandTotal=this.product.reduce(function(acc:any,val:any){
      return acc+(val.product_price*val.quantity);
    },0);
  }

}





