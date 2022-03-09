package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.UserService;

@CrossOrigin(origins="*")
@RestController
public class LoginController {
	
    @Autowired
    public UserService userservice;

    
		@GetMapping("/logins/{email}&{password}")
		 public String existsByemailAndPassword(  @PathVariable String email , @PathVariable String password) {
			return(userservice.existsByemailAndpassword(email,password));
				
		}
}