import { Component, OnInit } from '@angular/core';
import { Product } from '../product-service/product';

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
      product_quantity: 2}
  ];

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
