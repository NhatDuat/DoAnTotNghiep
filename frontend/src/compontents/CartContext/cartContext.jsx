import React, { createContext, useContext } from 'react';

const cartContext = createContext();

const useCart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (fruitId) => {
    // Thêm sản phẩm vào giỏ hàng
  };

  return {
    cartItems,
    setCartItems,
    cartCount,
    addToCart,
  };
};

export { cartContext, useCart };
