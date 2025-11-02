import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => { 
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ae01fe13-51a6-4d6a-9516-5137d171ffe5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hide after 3s
      event.target.reset();
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch :</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk :</h1>
          <p>I'm currently available to take on new projects.</p>
          <div className="contact-deatails">
            <FaEnvelope className='contact-icon' />
            <p>assadhoucine10@gmail.com</p>
          </div>
          <div className="contact-deatails">
            <FaPhone className='contact-icon' />
            <p>+212 766390102</p>
          </div>
          <div className="contact-deatails">
            <FaMapMarkerAlt className='contact-icon' />
            <p>RABAT-TEMARA</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name :</label>
          <input type="text" name="name" placeholder="Enter Your Name :" required />
          <label>Your Email :</label>
          <input type="email" name="email" placeholder="Enter Your Email :" required />
          <label>Write your message here :</label>
          <textarea name="message" rows="8" placeholder='Enter your message :' required></textarea>
          <button type="submit" className='contact-submit'>Submit Now !</button>
        </form>
      </div>

      {success && (
        <div className="success-notification">
          <FaCheckCircle className="success-icon" />
          <span>Message sent successfully!</span>
        </div>
      )}
    </div>
  );
}

export default Contact;
