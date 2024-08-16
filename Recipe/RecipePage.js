import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipePage.css';

const RecipePage = () => {
  const { name } = useParams();

  const fetchRecipeByName = (name) => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    return storedFavourites.find(dish => dish.name === decodeURIComponent(name));
  };

  const recipe = fetchRecipeByName(name);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="recipe-page">
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <div className="recipe-content">
        <div className="recipe-video">
          <iframe
            src={`https://www.youtube.com/embed/${recipe.recipe.videoId}`}
            title={recipe.recipe.label}
            allowFullScreen
          ></iframe>
        </div>
        <div className="recipe-details">
          <h2>{recipe.recipe.label}</h2>
          <h3>Ingredients</h3>
          <ul>
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Preparation</h3>
          <p>{recipe.recipe.preparation}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
