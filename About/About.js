import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleShowFavourites = () => {
    navigate('/favourites');
  };

  return (
    <div className="page-container">
      <div className="button-container">
        <button onClick={handleShowFavourites}>
          <FaHeart className="button-icon" /> Show Favourites
        </button>
      </div>
      <div className="content-box">
        <div className="lottie-wrapper">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
          <dotlottie-player 
            src="https://lottie.host/1ab8abf6-2ad7-46af-a08a-43cd0965cb54/MzxUfvmOOC.json" 
            background="transparent" 
            speed="1" 
            style={{ width: '400px', height: '400px', borderRadius: '20px' }} 
            loop 
            autoplay>
          </dotlottie-player>
        </div>
        <div className="text-content1">
          <h1 className="title">About Meal Craze</h1>
          <p className="description">
            Explore a gastronomic journey with Meal Craze! Our app brings together
            a curated collection of recipes, bursting with flavors and rich
            culinary traditions. Perfect for anyone looking to add a touch of
            gourmet to their home cooking, Meal Craze is your gateway to delicious
            meals from around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
