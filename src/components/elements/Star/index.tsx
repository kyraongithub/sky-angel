/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import styles from "./MovingElement.module.scss";

const Star = (props: any) => {
  const { plane, setStar, star } = props;
  const [left, setLeft] = useState<number>(0);
  const [isVisible, setisVisible] = useState<boolean>(true);
  useEffect(() => {
    setLeft(Math.floor(Math.random() * (500 - 0 + 1) + 0));
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);

  const starUseRef: any = useRef();

  useEffect(() => {
    if (plane !== null && starUseRef !== null && isVisible) {
      const planeRef = plane.current.getBoundingClientRect();
      const starRef = starUseRef.current.getBoundingClientRect();
      if (
        !(
          planeRef?.right < starRef?.left ||
          planeRef?.left > starRef?.right ||
          planeRef?.bottom < starRef?.top ||
          planeRef?.top > starRef?.bottom
        )
      ) {
        console.log("hit");
        setisVisible(false);
        setStar(star + 1);
      }
    }
  });

  return (
    <>
      {isVisible ? (
        <div
          ref={starUseRef}
          style={{ left: left }}
          className={[styles.movingElement].join(" ")}
        >
          <img alt="cloud" src={`/images/star.png`} />
        </div>
      ) : null}
    </>
  );
};

export default Star;
