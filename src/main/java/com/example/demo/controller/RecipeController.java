package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ContactEntity;
import com.example.demo.Entity.RecipeEntity;
import com.example.demo.Service.RecipeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {
    
    @Autowired
    RecipeService rs;
    
    @PostMapping("/insert")
    public RecipeEntity insertTheData(@RequestBody RecipeEntity re) {
        return rs.insertIntoTheTable(re);
    }
    
    @GetMapping("/get")
    public List<RecipeEntity> get() {
        return rs.getdata();
    }

    @GetMapping("/users/{id}")
    public RecipeEntity getUserById(@PathVariable int id) {
        return rs.getUserById(id);
    }

    @PutMapping("/users/{id}")
    public RecipeEntity updateUser(@PathVariable int id, @RequestBody RecipeEntity updatedUser) {
        return rs.updateUser(id, updatedUser);
    }


    @PostMapping("/contact")
    public ContactEntity saveContact(@RequestBody ContactEntity contact) {
        return rs.saveContact(contact);
    }
}
