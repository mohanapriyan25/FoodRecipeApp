package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entity.RecipeEntity;

public interface RecipeRepo extends JpaRepository<RecipeEntity, Integer> {
    // No need to explicitly define the save method
}
