import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImage from './images/mealcrazelogo1.png';
import googleIcon from './images/google1.png'; 
import instagramIcon from './images/insta1.jpeg'; 
import facebookIcon from './images/facebook1.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <img src={logoImage} alt="MealCraze Logo" className="footer-logo" />
        <p className="footer-tagline">Explore the unleashing dishes with a good taste...</p>
      </div>
      <div className="footer-section footer-center">
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <div className="footer-social">
          <img src={googleIcon} alt="Google Sign In" className="social-icon" />
          <img src={instagramIcon} alt="Instagram Sign In" className="social-icon" />
          <img src={facebookIcon} alt="Facebook Sign In" className="social-icon" />
        </div>
      </div>
      <div className="footer-section footer-right">
        <div className="footer-info">
          <p className="footer-item">
            <i className="fas fa-envelope"></i> mealcraze@gmail.com
          </p>
          <p className="footer-item">
            <i className="fas fa-phone"></i> +91 6548971045
          </p>
          <p className="footer-item">
            <i className="fas fa-map-marker-alt"></i> 123 Food Street, Flavor Town, Coimbatore
          </p>
        </div>
      </div>
      <div className="footer-copy">
        <div className="footer_cpyright">
          <p>© 2024 Meal Craze. All rights reserved.<br />Unauthorized use or duplication of this application without express and written permission from this site's author or owner is strictly prohibited.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
