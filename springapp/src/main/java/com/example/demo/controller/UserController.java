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

import com.example.demo.model.User;
import com.example.demo.services.UserService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserService userservice;
	
	// get all Users
	@GetMapping("/user")
	public List<User> getAllUsers(){
		return userservice.getAll();
	}		
	
	// add user rest api
	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return  userservice.saveUser(user);
	}
	
	// get user by id rest api
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable Long id) {
		return userservice.getUserById(id);

	}
	
	// update user rest api
	
	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User userDetails){
		return userservice.updateUser(id, userDetails);
	}
	
	// delete user rest api
	@DeleteMapping("/user/{id}")
	public User deleteUser(@PathVariable Long id){
		return userservice.deleteUser(id);

	}
	
	
}
