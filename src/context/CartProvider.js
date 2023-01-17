import React, { useReducer } from "react";
import CartContext from "./cart-context";
const initialCartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducerHandler = (state, action) => {
  let cartItems, totalPrice, currentItem, index;
  switch (action.type) {
    case "ADD":
      index = state.cartItems.findIndex((item) => item.id === action.item.id);
      currentItem = state.cartItems[index];
      if (currentItem) {
        currentItem.amount += action.item.amount;
        cartItems = [...state.cartItems];
        cartItems[index] = currentItem;
      } else {
        cartItems = state.cartItems.concat(action.item);
      }
      totalPrice = state.totalPrice + action.item.price * +action.item.amount;
      return { cartItems, totalPrice };
    case "REMOVE":
      index = state.cartItems.findIndex((item) => item.id === action.itemId);
      currentItem = state.cartItems[0];

      if (!currentItem) return state;
      if (currentItem.amount === 1) {
        cartItems = state.cartItems.filter((item) => item.id !== action.itemId);
      } else {
        currentItem.amount -= 1;
        cartItems = [...state.cartItems];
        cartItems[index] = currentItem;
      }
      totalPrice = state.totalPrice - +currentItem.price;
      return { cartItems, totalPrice };
    default:
      return state;
  }

  //   if (action.type === "ADD") {
  //     const cartItems = state.cartItems.concat(action.item);
  //     const totalPrice =
  //       state.totalPrice + action.item.price * +action.item.amount;
  //     return { cartItems, totalPrice };
  //   } else if (action.type === "REMOVE") {
  //     const currentItem = state.cartItems.find(
  //       (item) => item.id === action.itemId
  //     );
  //     if (!currentItem) return state;
  //     const cartItems = state.cartItems.filter(
  //       (item) => item.id !== action.itemId
  //     );
  //     const totalPrice =
  //       state.totalPrice - +currentItem.price * +currentItem.amount;
  //     return { cartItems, totalPrice };
  //   }
  //   return state;
};

const CartProvider = (props) => {
  const [{ cartItems, totalPrice }, cartDispatchHandler] = useReducer(
    cartReducerHandler,
    initialCartState
  );

  const addToCart = (item) => {
    // Check if item already exists
    console.log("new", item);
    cartDispatchHandler({ type: "ADD", item });
  };

  const removeFromCart = (itemId) => {
    cartDispatchHandler({ type: "REMOVE", itemId });
  };

  return (
    <CartContext.Provider
      value={{ totalPrice, cartItems, addToCart, removeFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
