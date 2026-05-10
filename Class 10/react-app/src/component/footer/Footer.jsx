import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">BanoQabil</h3>
          <p className="footer-description">
            Empowering skills and creating opportunities for growth and success.
          </p>
          <div className="social-links">
            <a href="#facebook" className="social-icon">
              f
            </a>
            <a href="#twitter" className="social-icon">
              𝕏
            </a>
            <a href="#linkedin" className="social-icon">
              in
            </a>
            <a href="#instagram" className="social-icon">
              📷
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li>
              <a href="#documentation">Documentation</a>
            </li>
            <li>
              <a href="#tutorials">Tutorials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-contact">
            <li>📧 info@banoquabil.com</li>
            <li>📱 +92-XXX-XXXXXXX</li>
            <li>📍 Your Location Here</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2026 BanoQabil. All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
