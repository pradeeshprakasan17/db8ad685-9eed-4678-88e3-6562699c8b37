import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/models/cart-item';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 id: any
  product: Product = new Product();

  constructor(private productService: ProductService,private cartService:CartService,
              private route: ActivatedRoute) { }
              ngOnInit(): void {
                this.id=this.route.snapshot.params['id'];
                this.productService.getProductById(this.id).subscribe(data => {
                  this.product=data;
                }, 
                error => console.log(error));
              }
              quantityCheck(value : any){
                  if(value == 0){ return true; }
                  else{ return false; }
              }
              addToCart(theProduct: Product) {

                console.log(`Adding to cart: ${this.product.product_name}, ${this.product.product_price}`);
                const theCartItem = new CartItem(this.product);
                this.cartService.addToCart(theCartItem);
              }
}
