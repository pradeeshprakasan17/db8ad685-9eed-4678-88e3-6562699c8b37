package com.example.demo.services;


import java.util.List;

import com.example.demo.model.Product;

public interface ProductService {
	public List<Product> getAllProducts();
	public Product addProduct(Product product);
	public Product getProductById(Long id);
	public Product updateProduct( Long id, Product productDetails);
	public Product deleteProduct(Long id);
}
