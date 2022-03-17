package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/")
public class SignupController { 

	@Autowired
    public UserService userservice;

    public SignupController(UserService userservice) {
		super();
		this.userservice = userservice;
	}

     
	@GetMapping("/User")
	public List<User> getAll(){
		return userservice.getAll();
	}


	@PostMapping("/signup")
	public User saveUser(@RequestBody User user) {
		return userservice.saveUser(user);
	}
	
	
}

