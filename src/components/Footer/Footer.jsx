import React from 'react';
import './Footer.css';
import { FaUser } from 'react-icons/fa'; // Import user icon

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>EL HOUCINE ASSAD</h1>
                <p> 
                  I am a young graduate with a professional bachelor's degree in Computer Systems Engineering (Bac+3), with a solid academic background and a strong passion for new technologies.
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <FaUser className="footer-user-icon" /> {/* User icon */}
                    <input type="email" placeholder='Enter Your Email :' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 El Houcine Assad. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
