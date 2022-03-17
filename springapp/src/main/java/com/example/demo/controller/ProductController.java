package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Product;
import com.example.demo.services.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

	@Autowired
	private ProductService productservice;
	
	// get all products
	@GetMapping("/product")
	public List<Product> getAllProducts(){
		return productservice.getAllProducts();
	}		
	
	// add product rest api
	@PostMapping("/product")
	public Product addProduct(@RequestBody Product product) {
		return productservice.addProduct(product);
	}
	
	// get product by id rest api
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productservice.getProductById(id);
	}
		
	// update product rest api
	
	@PutMapping("/product/{id}")
	public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails){
		return productservice.updateProduct(id, productDetails);
				
	}
	
	// delete user rest api
	@DeleteMapping("/product/{id}")
	public Product deleteProduct(@PathVariable Long id){
		return productservice.deleteProduct(id);
				
	}
}
