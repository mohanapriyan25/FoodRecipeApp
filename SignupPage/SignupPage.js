import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import axios from 'axios';

const SignupPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { firstname, lastname,email, password, phonenumber };

    try {
      const usersResponse = await axios.get("http://localhost:7000/get");
      const users = usersResponse.data;

      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        setError('User already exists with this email');
      } else {
        await axios.post("http://localhost:7000/insert", newUser);

        alert("Registration successful");
        navigate('/login'); 
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className='signup-page-body'>
      <div className='signup'>
        <div className="signup-page">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className='form-group-login'>
              <button type="submit">Sign Up</button>
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
