
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{


    //public void deleteCartById(Long id);
    //@Query("SELECT c FROM Cart c WHERE c.id = ?1")
    //Optional<Cart> findCartById(Long id);
    //Optional<Cart> findById(Long id);

    //Optional<Cart> findCartById(Cart cart);
}
