import { Component, OnInit } from '@angular/core';
import { Product } from '../product-service/product'
import{ ProductService } from '../product-service/product.service'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product: Product[] = [];
  product_name: any
  constructor(private productService:ProductService,
    private router: Router) { }

  ngOnInit(): void {
this.getProduct();

 }
 
 private getProduct(){
   this.productService.getProductList().subscribe(data => {
     this.product=data;
   }); 
 }
 Search(){
   if(this.product_name==""){
     this.ngOnInit();
 }
 else{
   this.product=this.product.filter(data =>{
     return data.product_name.toLocaleLowerCase().match(this.product_name.toLocaleLowerCase());
   });
  }
}

 updateProduct(id: any){
   this.router.navigate(['update-product', id]);
 }
 deleteProduct(id: any){
  this.productService.deleteProduct(id).subscribe( data => {
    console.log(data);
    this.getProduct();
 })
  }
}


