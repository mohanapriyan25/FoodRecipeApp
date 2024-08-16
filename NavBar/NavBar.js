import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logoImage from './images/mealcrazelogo1.png';
import profileIcon from './images/profile1.jpg'; 
import logoutIcon from './images/logout1.jpg';  

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    if (loggedInUser) {
      setUserName(loggedInUser.firstname);
    }
  }, [location]);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUserName('');
    alert('Logged out successfully!');
    navigate('/');
    setDropdownVisible(false);
  };

  if (isAuthPage) return null;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logoImage} alt="MealCraze Logo" className="logo-image" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {userName ? (
          <li className="user-name" onClick={() => setDropdownVisible(!dropdownVisible)}>
            <span>{userName}</span>
            {dropdownVisible && (
              <div className="sidebar-menu">
                <button onClick={() => navigate('/profile')}>
                  <img src={profileIcon} alt="Profile" className="sidebar-icon" />
                  Profile
                </button>
                <button onClick={handleLogout}>
                  <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
                  Logout
                </button>
              </div>
            )}
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
