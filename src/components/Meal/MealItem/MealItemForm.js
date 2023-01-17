import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInput = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const amount = +amountInput.current.value;
    // validate amount
    if (
      amountInput.current.value.trim().length === 0 ||
      amount < 1 ||
      amount > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    props.onAddToCart(amount);
  };

  const inputConfig = {
    type: "number",
    id: "amount_" + props.id,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input ref={amountInput} label="Amount" inputConfig={inputConfig} />
      <button>+Add</button>
      {!isValidAmount && <p>Amount should be between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
