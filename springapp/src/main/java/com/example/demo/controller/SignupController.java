package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins="*")
@RestController
public class SignupController {

	@Autowired
    public UserService userservice;

    @GetMapping("/User")
	public List<User> getAll(){
		return userservice.getAll();
	}


	@PostMapping("/signup")
	public User saveUser(@RequestBody User user) {
		return userservice.saveUser(user);
	}
}

