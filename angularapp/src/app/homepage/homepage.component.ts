import { Component, OnInit } from '@angular/core';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';

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
      product_quantity: 2
    },
    { id:2,
      product_name: "Chain",
      product_price: 1500,
      product_img: "./../assets/images/login-main.png",
      product_desc: "This chain items from the amaze pack online site",
      product_quantity: 0
    },
  ];

  gridColumns = 3;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.productItems=data;
    }); 
  }
}