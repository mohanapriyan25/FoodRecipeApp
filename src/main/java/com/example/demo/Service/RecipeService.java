package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.ContactEntity;
import com.example.demo.Entity.RecipeEntity;
import com.example.demo.Repo.ContactRepo;
import com.example.demo.Repo.RecipeRepo;

@Service
public class RecipeService {
    
    @Autowired
    RecipeRepo rr;
    
    public RecipeEntity insertIntoTheTable(RecipeEntity re) {
        return rr.save(re);
    }

    public List<RecipeEntity> getdata() {
        return rr.findAll();
    }
    
    public RecipeEntity getUserById(int id) {
        Optional<RecipeEntity> user = rr.findById(id);
        return user.orElse(null); 
    }

    public RecipeEntity updateUser(int id, RecipeEntity updatedUser) {
        if (rr.existsById(id)) {
            updatedUser.setId(id);
            return rr.save(updatedUser);
        } else {
            return null; 
        }
    }
    
    @Autowired
    private ContactRepo cr;
    
    public ContactEntity saveContact(ContactEntity contact) {
        return cr.save(contact);
    }
}
