import React from 'react';
import './footer.css'; 

const Footer = () => {
  const today = new Date();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            WD74P Copyright &copy; {today.getFullYear()} by Diana G. All rights reserved.
          </p>
          <div className="social-media-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
