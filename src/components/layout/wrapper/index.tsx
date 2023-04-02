import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = (props: any) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
