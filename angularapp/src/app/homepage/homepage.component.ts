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
  
  productItems : Product[] = [
    { id:1,
      product_name: "Key_Chain",
      product_price: 1000,
      product_img: "./../assets/images/login-main.png",
      product_desc: "This gift items from the amaze pack online site",
      product_quantity: 10
    },
    { id:2,
      product_name: "Chain",
      product_price: 1500,
      product_img: "./../assets/images/login-main.png",
      product_desc: "This chain items from the amaze pack online site",
      product_quantity: 5
    },
  ];

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