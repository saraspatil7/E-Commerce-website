import React from "react";

function CartView({ cartItems = [], onBackToShop, onOrderPlaced, clearCart }) {
  
  const handleProceedToCheckout = () => {
    // 1. Safety check to ensure cart has products
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    // 2. Fire the successful order notification window
    alert("Thank you! Your order has been placed successfully.");
    
    // 3. Clear the global cart context safely if the function exists
    if (typeof clearCart === "function") {
      clearCart(); 
    }
    
    // 4. Return user cleanly back to the shop grid layout view
    onOrderPlaced();
  };

  // Dynamically sum up matching items
  const totalQuantity = cartItems.reduce((acc, curr) => acc + (curr.quantity || 0), 0);

  return (
    <div className="cart-preview-screen" style={{ padding: "20px" }}>
      <button 
        onClick={onBackToShop} 
        className="secondary-btn" 
        style={{ marginBottom: "20px", cursor: "pointer" }}
      >
        ← Back to Shop
      </button>
      
      <div 
        className="cart-item-row" 
        style={{ display: "flex", justifyContent: "space-between", background: "#1a1f2c", padding: "20px", borderRadius: "8px", color: "#fff", alignItems: "center" }}
      >
        <div>
          <h3>Your Added Items</h3>
          <p>Items in cart: {totalQuantity}</p>
        </div>

        <div style={{ backgroundColor: "#b96bf6", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold" }}>
          Quantity: {totalQuantity}
        </div>
      </div>

      <button 
        className="proceed-checkout-btn" 
        onClick={handleProceedToCheckout} 
        style={{ 
          marginTop: "20px", 
          padding: "12px 24px", 
          background: "#5ce1e6", 
          color: "#000",
          border: "none", 
          borderRadius: "4px", 
          fontWeight: "bold", 
          cursor: "pointer", 
          display: "block", 
          marginLeft: "auto" 
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartView;