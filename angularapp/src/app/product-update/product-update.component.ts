import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: any;
  product: Product=new Product();
    constructor(private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product=data;
    }, 
    error => console.log(error));
  }
  onSubmit(){
    this.productService.updateProduct(this.id , this.product).subscribe(data =>{
    this.goToProductList();
    },
     error => console.log(error));
  }
  
  goToProductList(){
    this.router.navigate(['/display-product']);
  }
  
}