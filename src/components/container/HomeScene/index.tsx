import Button from "@/components/elements/Button";
import React from "react";
import styles from "./HomeScene.module.scss";

const HomeScene = (props: any) => {
  const { setScene } = props;
  console.log(props);
  return (
    <div className={styles.container}>
      <p>SKY ANGEL</p>
      <Button onClick={() => setScene("gameplay")}>Start Game</Button>
    </div>
  );
};

export default HomeScene;
