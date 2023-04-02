import React from "react";
import styles from "./Button.module.scss";
const Button = (props: any) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
