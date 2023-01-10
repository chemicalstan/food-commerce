import { Fragment } from "react";
import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FOODIES</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
