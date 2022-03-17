package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

import org.springframework.data.repository.query.Param;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
boolean existsByemailAndPassword(String email, String password);
//@Query("SELECT u from User where u.username=:username")
//public User getUserByUsername(@Param("username")String username);
}
