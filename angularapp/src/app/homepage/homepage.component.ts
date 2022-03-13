import { Component, OnInit } from '@angular/core';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  productItems : Product[] = [];

  gridColumns = 3;

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.productItems=data;
    }); 
  }

  addToCart(product:any)
  {
    this.cartService.addToCart(product);
  }

  quantityCheck(value : any){
      if(value == 0){ return true; }
      else{ return false; }
  }
}