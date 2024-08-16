import React, { useState } from 'react';
import './Contact.css';
import Footer from './Footer';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await axios.post('http://localhost:7000/contact', formData);
      console.log('Form submitted:', response.data);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="contact-container">
    <div className='contact1'>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We would love to hear from you! Please reach out with any questions, feedback, or suggestions.
      </p>
      {isSubmitted ? (
        <p className="success-message">Thanks for your valuable feedback!<br />Submitted successfully!</p>
      ) : (
        <div>
          {error && <p className="error-message">{error}</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              Message:
              <textarea
                name="message"
                className="form-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
