/*
package com.example.demo.security;

import java.util.Collection;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.example.demo.model.User;

import com.example.demo.model.Role;

public class userdetails implements UserDetails {
    private User user;
    public userdetails(User user) {
    	this.user=user;
    }
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
	Set<Role> roles=user.getRoles();
	List<SimpleGrantedAuthority>authorities=new ArrayList<>();
	for(Role role:roles) {
		authorities.add(new SimpleGrantedAuthority(role.getUsername()));
	}
	
	return authorities;	
	
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return user.isActive();
	}

}
*/