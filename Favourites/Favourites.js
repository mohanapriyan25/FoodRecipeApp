import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Favourites.css';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (Array.isArray(storedFavourites)) {
      setFavourites(storedFavourites);
    } else {
      setFavourites([]);
    }
  }, []);

  const handleViewRecipe = (dish) => {
    navigate(`/recipe/${encodeURIComponent(dish.name)}`);
  };

  return (
    <div className="favourites-page">
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="favourites-list">
          {favourites.map((dish, index) => (
            <div key={index} className="favourite-dish">
              <h3>{dish.name}</h3>
              <button onClick={() => handleViewRecipe(dish)}>View Recipe</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
