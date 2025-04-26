import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a backend server
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:ahamad.ashif77@gmail.com">ahamad.ashif77@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/ashif-ahamad/" target="_blank" rel="noopener noreferrer">Ashif Ahamad</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div className="contact-details">
                <h3>GitHub</h3>
                <p><a href="https://github.com/ds-ashif" target="_blank" rel="noopener noreferrer">github.com/ds-ashif</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <h3>Location</h3>
                <p>Phagwara, Punjab, India</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email:  </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject:  </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
              
              {formSubmitted && (
                <div className="form-success-message">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 