import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
      if (loggedInUser) {
        const response = await axios.get(`http://localhost:7000/users/${loggedInUser.id}`);
        setUser(response.data);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phonenumber);
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    const updatedUser = { firstname, lastname, email, phonenumber };
    try {
      const response = await axios.put(`http://localhost:7000/users/${user.id}`, updatedUser);
      setUser(response.data);
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the profile.');
    }
  };

  if (!user) return null;

  return (
    <div className='profile-page'>
    <div className="profile">
    {editMode ? (
        <div className="profile-edit">
            <h2>Edit Profile</h2>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="text"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="button-group">
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
        </div>
    ) : (
        <div className="profile-view">
            <h2>Profile</h2>
            <p><strong>First Name:</strong> {user.firstname}</p>
            <p><strong>Last Name:</strong> {user.lastname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phonenumber}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
    )}
    </div>
    </div>
  );
};

export default Profile;
