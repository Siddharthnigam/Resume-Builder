import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footere">
      <p>© 2024 Great Resumne's</p>
      <nav className="footer-nav">
        <a href="/about">About Us</a>
        
        <a href="/contact">Contact</a>
      </nav>
      <div className="footer-social">
        <a href="https://www.facebook.com/yourprofile">Facebook</a>
        <a href="https://www.twitter.com/yourprofile">Twitter</a>
        <a href="https://www.linkedin.com/yourprofile">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
