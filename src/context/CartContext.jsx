import React, {
  createContext,
  useContext,
  useState,
} from "react";

/* CREATE CONTEXT */

const CartContext = createContext();

/* PROVIDER */

export function CartProvider({ children }) {

  const [cartItems, setCartItems] =
    useState([]);

  /* ADD TO CART */

  const addToCart = (product) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      // IF PRODUCT ALREADY EXISTS
      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // NEW PRODUCT
      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* REMOVE FROM CART */

  const removeFromCart = (productId) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === productId
      );

      // REMOVE ITEM COMPLETELY
      if (existingItem.quantity === 1) {

        return prevItems.filter(
          (item) => item.id !== productId
        );
      }

      // DECREASE QUANTITY
      return prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    });
  };

  /* CLEAR CART */

  const clearCart = () => {
    setCartItems([]);
  };

  /* TOTAL CART ITEMS */

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* CUSTOM HOOK */

export function useCart() {
  return useContext(CartContext);
}