import React from 'react';
import './Carousel.css';

const Carousel = ({ dishes }) => {
  return (
    <div className="carousel">
      {dishes.map((dish, index) => (
        <div key={index} className="carousel-item">
          <img src={dish.recipe.image} alt={dish.recipe.label} />
          <div className="carousel-caption">
            <h3>{dish.recipe.label}</h3>
            <a href={dish.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
