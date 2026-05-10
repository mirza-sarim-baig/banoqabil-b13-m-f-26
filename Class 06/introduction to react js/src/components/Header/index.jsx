import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>MyBrand</h1>
        </div>
        <nav className="nav-menu">
          <ul className="menu-list">
            <li>
              <a href="#home" className="menu-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-link">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="menu-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
