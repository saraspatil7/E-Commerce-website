import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Add this at the very top of the file if it's missing

import "../App.css";

function CartPage({ onBackToShop }) {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div className="page-section">
      <div className="header-bar">
        <h2>Your Saved Shopping Cart</h2>
        <button className="add-to-cart-btn" onClick={onBackToShop}>← Back to Shop</button>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h3>Your cart page is currently empty!</h3>
          <p>Go back to the shop page and add some items.</p>
        </div>
      ) : (
        <div>
          <div className="cart-list" style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "20px" }}>
            {cartItems.map((item, idx) => (
              <div key={idx} className="product-card" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px", gap: "20px" }}>
                <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                  <p style={{ margin: 0, fontWeight: "bold", color: "#2563eb" }}>{item.price}</p>
                </div>
                <div className="quantity-stepper" style={{ width: "120px" }}>
                  <button onClick={() => removeFromCart(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
            <button className="add-to-cart-btn" style={{ borderColor: "#ef4444", color: "#ef4444" }} onClick={clearCart}>
              Clear Cart Page
            </button>
            <button className="primary-btn" style={{ padding: "12px 30px" }}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;