import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputConfig = {
    type: "number",
    id: "Amount",
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={styles.form}>
      <Input label="Amount" inputConfig={inputConfig} />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
