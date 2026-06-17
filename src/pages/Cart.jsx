import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Checkout from "../components/Checkout"; // 🚀 Fixed: Points perfectly to your src/components/Checkout.jsx
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  
  // Controls whether we see the items list or the checkout form on the Cart Page
  const [view, setView] = useState("cart"); 
  const navigate = useNavigate();

  return (
    <div className="home-wrapper" style={{ padding: "80px 8%", minHeight: "100vh" }}>
      
      {/* ========================================== */}
      {/* 1. THE SAVED SHOPPING CART ITEMS LIST VIEW */}
      {/* ========================================== */}
      {view === "cart" && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <Link 
            to="/products" 
            style={{ 
              display: "inline-block", 
              marginBottom: "30px", 
              background: "transparent", 
              border: "1px solid rgba(255,255,255,0.3)", 
              color: "#fff", 
              padding: "8px 16px", 
              borderRadius: "4px", 
              textDecoration: "none" 
            }}
          >
            ← Back to Shop
          </Link>

          <h2 style={{ fontFamily: '"Orbitron", sans-serif', color: "#fff", fontSize: "28px", marginBottom: "30px" }}>
            Your Saved Shopping Cart
          </h2>

          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "50px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "18px", margin: 0 }}>Your cart is empty.</p>
            </div>
          ) : (
            <>
              {/* Dynamic Items Array Container */}
              <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
                {cartItems.map((item, idx) => (
                  <div key={idx} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(0, 240, 255, 0.2)",
                    borderRadius: "12px",
                    flexWrap: "wrap",
                    gap: "20px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                      {/* White Container Box for Thumbnail Images */}
                      <div style={{ width: "80px", height: "80px", background: "#fff", borderRadius: "8px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={item.image} alt={item.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                      </div>
                      <div>
                        <h4 style={{ color: "#fff", margin: "0 0 5px 0", fontSize: "18px", fontWeight: "700" }}>{item.name}</h4>
                        <p style={{ color: "var(--neon-blue)", margin: 0, fontWeight: "bold", fontSize: "16px" }}>
                          {item.displayPrice || `₹${item.price.toLocaleString("en-IN")}`}
                        </p>
                      </div>
                    </div>

                    {/* Purple Stepper Panel Element matching your screenshot exactly */}
                    <div className="quantity-stepper" style={{ height: "40px", width: "120px" }}>
                      <button onClick={() => removeFromCart(item.id)} className="stepper-btn">-</button>
                      <span className="stepper-count">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="stepper-btn">+</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                <button
                  onClick={() => { if (clearCart) clearCart(); }}
                  style={{
                    background: "transparent",
                    color: "#ff4d4d",
                    border: "1px solid #ff4d4d",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  Clear Cart Page
                </button>

                {/* FIXED PROCEED BUTTON TRIGGER */}
                <button
                  onClick={() => setView("checkout")} // 🚀 Flips view to mount your Checkout component right here!
                  style={{
                    background: "#fff",
                    color: "#000",
                    border: "none",
                    padding: "14px 32px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "16px",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)"
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ========================================== */}
      {/* 2. THE CHECKOUT FORM TERMINAL VIEW */}
      {/* ========================================== */}
      {view === "checkout" && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Checkout 
            cartItems={cartItems} 
            
            // If they click Back inside Checkout, return them safely back to the Cart Grid list
            onBackToShop={() => setView("cart")} 
            
            onOrderSuccess={(details) => {
              if (clearCart) clearCart();
              navigate("/"); // Re-routes them back to Home page after order is logged
            }} 
          />
        </div>
      )}
      
    </div>
  );
}

export default Cart;