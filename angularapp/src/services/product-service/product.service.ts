import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseURL="http://localhost:8090/api/v1/product";
  product_name: any
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
   }
    
  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }
  
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number,product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
