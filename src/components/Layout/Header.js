import { Fragment, useState } from "react";
import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [displayCart, displayCartHandler] = useState(false);

  const showCartHandler = (e) => {
    e.preventDefault();
    displayCartHandler(true);
  };

  const closeCartHandler = (e) => {
    e.preventDefault();
    displayCartHandler(false);
  };
  return (
    <Fragment>
      {displayCart && <Cart onClose={closeCartHandler} />}
      <header className={styles.header}>
        <h1>FOODIES</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
