import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartCtx.cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
