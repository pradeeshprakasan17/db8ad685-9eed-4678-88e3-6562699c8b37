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
    {id: 1,
    product_name: "Key Chain",
    product_price: 1500,
    product_img: "../../assets/images/login-main.png",
    product_desc: "hjbcbbb asiuucnc basbnclac cbanca",
    product_quantity: 105
    },
    {id: 2,
      product_name: "Chain",
      product_price: 1054,
      product_img: "../../assets/images/login-main.png",
      product_desc: "hscsb asiuucnc basbnclac cbanca",
      product_quantity: 115
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