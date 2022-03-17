/*
package com.example.demo.services;
import com.example.demo.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.userdetails;

public class userdetailsImpl implements UserDetailsService {
	@Autowired
	private UserRepository userrepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user =userrepo.getUserByUsername(username);
		if(user==null) {
			throw new UsernameNotFoundException("Could not find User");
		}
			return new userdetails(user);
		}
	}

*/
