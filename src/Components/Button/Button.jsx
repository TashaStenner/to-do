import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const { handleClick, text, isPrimary } = props;
  const btnStyles = isPrimary ? styles.primary : styles.secondary;

  return <>
   <div className={styles.buttonStyle}>
        <button className={`${btnStyles}`} onClick={handleClick}>
          {text}
        </button>
      </div>
  </>;
};

export default Button;
