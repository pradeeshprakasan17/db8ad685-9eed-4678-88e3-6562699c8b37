package com.example.demo.services;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;


@Service
public class CartService  {

    private final  CartRepository cRepository;

    @Autowired
    public CartService(CartRepository cRepository){
        this.cRepository = cRepository;
    }

    public List<Cart>getAllCarts(){
        return cRepository.findAll();
    }

    public void addToCart(Cart cart) {
		 cRepository.save(cart);
	}

    public void deleteCartById(Long cartId) {
        boolean exists = cRepository.existsById(cartId);
        if (!exists){
            throw new IllegalStateException(" cart with id "+ cartId + " does not exists");
        }
        cRepository.deleteById(cartId);
    }
    public void updateCart(Cart cart){
         cRepository.save(cart);
    }
    }
