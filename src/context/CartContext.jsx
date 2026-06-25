import React, { createContext, useContext, useState } from "react";

// 1. CREATE THE CONTEXT
const CartContext = createContext();

// 2. THE PROVIDER COMPONENT (Wraps your app)
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  /* ADD TO CART FUNCTION */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      // IF IT EXISTS: Just increase the quantity by 1
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // IF IT IS NEW: Add it to the array and set quantity to 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  /* REMOVE FROM CART FUNCTION (For the purple stepper) */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      // IF QUANTITY IS 1: Completely remove the item from the cart array
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== productId);
      }

      // OTHERWISE: Just decrease the quantity by 1
      return prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  /* CLEAR ENTIRE CART FUNCTION (Used after successful payment) */
  const clearCart = () => {
    setCartItems([]);
  };

  /* TOTAL CART ITEMS (Powers the glowing notification badge in your Navbar) */
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems, // Exported to use in Navbar.jsx
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. CUSTOM HOOK
// This is what you import at the top of your pages!
export function useCart() {
  return useContext(CartContext);
}