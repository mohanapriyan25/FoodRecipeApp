import React from 'react';
import './DefaultHome.css';

const DefaultHome = () => {
  return (
    <div className="page-container">
      <div className="content-box">
        <div className="lottie-wrapper">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
          <dotlottie-player 
            src="https://lottie.host/352266e1-c1a2-4368-af70-3f7fad6d11c4/Z1rrUgMXq2.json" 
            background="transparent" 
            speed="1" 
            style={{ width: '500px', height: '500px' }} 
            loop 
            autoplay>
          </dotlottie-player>
        </div>
        <div className="text-content">
          <h1 className="title">Meal Craze</h1>
          <h2 className="subtitle">Your Ultimate Recipe Companion</h2>
          <p className="description">
            Discover a world of culinary delights with our comprehensive collection of recipes. Whether you're a seasoned chef or a cooking enthusiast, our app offers you the best recipes from around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultHome;
