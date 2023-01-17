import React from "react";

const CartContext = React.createContext({
  tatalPrice: 0,
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
});

export default CartContext;
