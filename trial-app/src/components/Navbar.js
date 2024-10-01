import React from 'react';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://img.freepik.com/free-vector/logo-unique-colorful-gradient-design-illustration_483537-1050.jpg?w=996&t=st=1727695290~exp=1727695890~hmac=9a308c5e3cd714581113023e9fbc8286b9947c93b3c64200c766852621c3ae68" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/AboutUs">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
