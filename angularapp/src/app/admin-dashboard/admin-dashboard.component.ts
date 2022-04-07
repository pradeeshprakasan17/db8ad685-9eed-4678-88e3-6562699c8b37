import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
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
}
