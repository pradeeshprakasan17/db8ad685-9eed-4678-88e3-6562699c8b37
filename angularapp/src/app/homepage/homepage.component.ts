import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cart-item';
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
    {id: 1,
    product_name: "Hello",
    product_price: 1500,
    product_img: "../../assets/images/login-main.png",
    product_desc: "vashjasjsa",
    product_quantity: 150},
    {id: 2,
      product_name: "Hello",
      product_price: 10,
      product_img: "../../assets/images/login-main.png",
      product_desc: "vashjasjsa",
      product_quantity: 1},
      {id:3,
        product_name: "Hello",
        product_price: 1500,
        product_img: "../../assets/images/login-main.png",
        product_desc: "vashjasjsa",
        product_quantity: 0}

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


  addToCart(theProduct: Product) {

    alert("Product Added Successful!!");
    console.log(`Adding to cart: ${theProduct.product_name}, ${theProduct.product_price}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

  quantityCheck(value : any){
      if(value == 0){ return true; }
      else{ return false; }
  }
}