package com.example.demo.services;

import java.util.List;

import com.example.demo.model.User;

public interface UserService {
	public List<User> getAll();
    public User saveUser(User user);
    public String existsByemailAndpassword(String email, String password);
    public User getUserById(Long id);
    public User updateUser(Long id, User userDetails);
    public User deleteUser(Long id);
}
