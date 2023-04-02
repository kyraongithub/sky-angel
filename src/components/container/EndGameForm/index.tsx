import Button from "@/components/elements/Button";
import { hitApi } from "@/services/Game";
import React, { useState } from "react";
import styles from "./Endgame.module.scss";

const Endgame = (props: any) => {
  const { score, star, endCause } = props;
  const [name, setname] = useState<string>("");
  const [submit, setsubmit] = useState<boolean>(false);

  const handlerSubmit = () => {
    setsubmit(true);
    hitApi(star, score, name);
    setTimeout(() => {
      location.reload();
    }, 3000);
  };
  return (
    <div className={styles.end}>
      <h2>
        {endCause === "fuel"
          ? "You are running out of fuel"
          : "You hit the bird"}
      </h2>
      <div>
        Score : <b>{score}</b> | star: <b>{star}</b>
      </div>
      <p>Submit your score</p>
      <input
        type="text"
        placeholder="Your name"
        onChange={(e) => setname(e.target.value)}
      />
      <Button onClick={() => handlerSubmit()} disabled={name === ""}>
        {!submit ? "Submit" : "Submited"}
      </Button>
    </div>
  );
};

export default Endgame;
