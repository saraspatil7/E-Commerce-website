import React, { useState } from "react";
import { supabase } from "../supabaseClient"; 

// 🚀 FIXED: Added default `cartItems = []` so the math function never panics!
function Checkout({ cartItems = [], onBackToShop, onOrderSuccess }) {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🚀 FIXED: Added Number() safety checks so strings or undefined data don't crash the render
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price) || 0;
      const itemQty = Number(item.quantity) || 1;
      return total + (itemPrice * itemQty);
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    const { name, email, address, city, postalCode, phone } = shippingDetails;
    if (!name || !address || !city || !postalCode || !phone) {
      alert("Please fill in all the required details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your shopping cart is empty.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. SAVE THE MAIN TRANSACTION INFO TO THE 'ORDERS' TABLE
      const orderPayload = {
        customer_name: name,
        customer_email: email || "no-email@domain.com",
        total_price: calculateTotal() 
      };

      const { error: orderError } = await supabase
        .from("orders")
        .insert([orderPayload]);

      if (orderError) throw orderError;

      // 2. SAVE THE DYNAMIC BASKET ITEMS TO THE 'PRODUCTS' TABLE
      const productPayloadRows = cartItems.map((item) => {
        const cleanPrice = typeof item.price === "number" 
          ? item.price 
          : parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0;

        return {
          name: item.name,
          price: cleanPrice,
          image: item.image,
          category_title: item.category_title || "Purchased Items Grid"
        };
      });

      const { error: productError } = await supabase
        .from("products")
        .insert(productPayloadRows);

      if (productError) throw productError;

      // 3. SUCCESS SEQUENCE
      if (onOrderSuccess) onOrderSuccess(shippingDetails);

    } catch (error) {
      console.error("Supabase Combined Uplink Process Fault:", error.message);
      alert("Failed to sync transaction parameters to database: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🚀 CYBER THEME STYLES FOR INPUTS
  const inputStyle = {
    background: "rgba(0, 0, 0, 0.5)",
    border: "1px solid var(--neon-blue)",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "6px",
    outline: "none",
    fontFamily: '"Orbitron", sans-serif',
    fontSize: "14px"
  };

  const labelStyle = {
    color: "var(--text-muted)",
    fontSize: "13px",
    marginBottom: "4px",
    fontFamily: '"Orbitron", sans-serif',
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(0, 240, 255, 0.3)", borderRadius: "12px", boxShadow: "0 0 20px rgba(0,0,0,0.5)" }}>
      
      <button 
        onClick={onBackToShop} 
        style={{ marginBottom: "20px", background: "transparent", border: "1px solid #fff", color: "#fff", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
        disabled={isSubmitting}
      >
        ← Back to Cart
      </button>

      <h2 style={{ marginBottom: "25px", color: "#fff", fontFamily: '"Orbitron", sans-serif', fontSize: "24px" }}>
        Secure <span className="neon-text">Checkout</span>
      </h2>

      <form onSubmit={handleSubmitOrder} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Full Name *</label>
          <input style={inputStyle} type="text" name="name" value={shippingDetails.name} onChange={handleInputChange} placeholder="ex. Saras Patil" required />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Email Address</label>
          <input style={inputStyle} type="email" name="email" value={shippingDetails.email} onChange={handleInputChange} placeholder="name@domain.com" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Street Address *</label>
          <input style={inputStyle} type="text" name="address" value={shippingDetails.address} onChange={handleInputChange} placeholder="Apartment, Street Name" required />
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>City *</label>
            <input style={inputStyle} type="text" name="city" value={shippingDetails.city} onChange={handleInputChange} required />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Postal Code *</label>
            <input style={inputStyle} type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} placeholder="400001" required />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Phone Number *</label>
          <input style={inputStyle} type="tel" name="phone" value={shippingDetails.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting} 
          style={{ 
            background: "var(--neon-blue)", 
            color: "#000", 
            border: "none", 
            padding: "16px", 
            marginTop: "10px",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            fontFamily: '"Orbitron", sans-serif',
            boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)"
          }}
        >
          {isSubmitting ? "Deploying Order Stream..." : `Pay Now (₹${calculateTotal().toLocaleString("en-IN")})`}
        </button>
      </form>
    </div>
  );
}

export default Checkout;