import { Fragment } from "react";
import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FOODIES</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
