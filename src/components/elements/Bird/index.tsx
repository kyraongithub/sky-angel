/* eslint-disable @next/next/no-img-element */
import { useGlobalState } from "@/context";
import { endGameHandler } from "@/services/Game";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Bird.module.scss";

const Bird = (props: any) => {
  const { plane } = props;
  const { setScene, score, star } = useGlobalState();
  const [top, setTop] = useState<number>(0);
  const [isVisible, setisVisible] = useState<boolean>(true);
  const bird: any = useRef();

  useEffect(() => {
    if (plane !== null && bird !== null) {
      const rect1 = plane.current.getBoundingClientRect();
      const rect2 = bird.current.getBoundingClientRect();
      if (
        !(
          rect1?.right < rect2?.left ||
          rect1?.left > rect2?.right ||
          rect1?.bottom < rect2?.top ||
          rect1?.top > rect2?.bottom
        )
      ) {
        endGameHandler(score, star, setScene);
      }
    }
  });

  useEffect(() => {
    setTop(Math.floor(Math.random() * (500 - 0 + 1) + 0));
    setTimeout(() => {
      setisVisible(false);
    }, 9000);
  }, []);

  return (
    <>
      {isVisible ? (
        <div ref={bird} style={{ top: top }} className={styles.bird}></div>
      ) : null}
    </>
  );
};

export default Bird;
