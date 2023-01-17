import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartCtx.addToCart({ amount, ...props.meal });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
