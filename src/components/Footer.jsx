import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>I’m Shiya Abdulla, a passionate software developer specializing in front-end development with a keen eye for creating engaging and user-friendly interfaces.</p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Connect with Me</h3>
          <ul className="social-links">
            <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Shiya Abdulla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
