import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product =new Product();
  constructor(private productService: ProductService,
    private router: Router) { }

 ngOnInit(): void {
 }
 
 saveProduct(){
   this.productService.addProduct(this.product).subscribe(data => {
     console.log(data);
     this.goToProductList();
   },
   error => console.log(error));
 } 
 goToProductList(){
   this.router.navigate(['/display-product']);
 }
 onSubmit(){
   console.log(this.product);
   this.saveProduct();
 }
}




  