import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItemsArr = [
    {
      id: "c1",
      mealId: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
  ];

  const CartItem = (
    <ul className={styles["cart-items"]}>
      {cartItemsArr.map((cartItem) => (
        <li key={cartItem.id}>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$23.99</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
