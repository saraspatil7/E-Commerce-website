import React from "react";

import {
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}

      <h1 className="logo">
        PATIL ELECTRONICS
      </h1>

      {/* NAV LINKS */}

      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* ACTIONS */}

      <div className="nav-actions">
        <FaSearch className="nav-icon" />

        <FaShoppingCart className="nav-icon" />

        <Link to="/products">
          <button className="primary-btn">
            Explore
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;