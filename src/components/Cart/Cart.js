import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsArr = cartCtx.cartItems;
  const onRemoveHanlder = (itemId) => {
    cartCtx.removeFromCart(itemId);
  };
  const onAddHandler = (item) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  };

  const totalAmount = `$ ${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.cartItems.length > 0;
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartItemsArr.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          {...cartItem}
          name={cartItem.name}
          amount={cartItem.amount}
          price={cartItem.price}
          onRemove={onRemoveHanlder.bind(null, cartItem.id)}
          onAdd={onAddHandler.bind(null, cartItem)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
