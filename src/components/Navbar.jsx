import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h1 className="logo">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          PATIL ELECTRONICS
        </Link>
      </h1>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* ACTIONS */}
      <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* SEARCH ICON */}
        <FaSearch className="nav-icon" />

        {/* 🚀 NAVBAR CART BUTTON COMPLETELY REMOVED FROM HERE */}

        {/* EXPLORE BUTTON */}
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