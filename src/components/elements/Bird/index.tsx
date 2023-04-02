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
    if (plane !== null && bird !== null && isVisible) {
      const planeRef = plane.current.getBoundingClientRect();
      const birdRef = bird.current.getBoundingClientRect();
      if (
        !(
          planeRef?.right < birdRef?.left ||
          planeRef?.left > birdRef?.right ||
          planeRef?.bottom < birdRef?.top ||
          planeRef?.top > birdRef?.bottom
        )
      ) {
        endGameHandler(score, star, setScene);
      }
    }
  }, [isVisible, plane, score, setScene, star]);

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
