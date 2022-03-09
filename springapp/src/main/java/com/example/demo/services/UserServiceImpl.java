package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	List<User> list;
	public UserServiceImpl() {
		list=new ArrayList<>();
	}

    @Autowired
    public UserRepository userrepo;
    
	@Override
	public List<User> getAll(){
		return userrepo.findAll();
	}

	public User saveUser(User user) {
		userrepo.save(user);
		return user;
	}
	
	public String existsByemailAndpassword(String email, String password) {
			return((userrepo.existsByemailAndPassword(email, password))? "true" :"false");
		}
		
}
