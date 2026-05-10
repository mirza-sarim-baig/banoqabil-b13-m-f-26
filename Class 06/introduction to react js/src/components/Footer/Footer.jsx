import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We are committed to providing the best products and services to our
            customers worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-icon">
              f
            </a>
            <a href="#twitter" className="social-icon">
              𝕏
            </a>
            <a href="#instagram" className="social-icon">
              📷
            </a>
            <a href="#linkedin" className="social-icon">
              in
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          Copyright &copy; 2024 MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
