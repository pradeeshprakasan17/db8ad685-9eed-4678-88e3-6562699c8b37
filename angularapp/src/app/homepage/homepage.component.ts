import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  productItems : Product[] = [
    {id:1,
      product_name: "HI",
      product_price: 500,
      product_img: "",
      product_desc: "tycg",
      product_quantity: "15"
      },
      {id:2,
        product_name: "HI",
        product_price: 500,
        product_img: "",
        product_desc: "tycg",
        product_quantity: "15"
      }
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