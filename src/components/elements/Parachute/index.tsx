/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import styles from "./MovingElement.module.scss";

const Parachute = (props: any) => {
  const { plane, setFuel, fuel } = props;
  const [left, setLeft] = useState<number>(0);
  const [isVisible, setisVisible] = useState<boolean>(true);

  useEffect(() => {
    setLeft(Math.floor(Math.random() * (500 - 0 + 1) + 0));
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);

  const parachute: any = useRef();

  useEffect(() => {
    if (plane !== null && parachute !== null && isVisible) {
      const planeRef = plane.current.getBoundingClientRect();
      const parachuteRef = parachute.current.getBoundingClientRect();
      if (
        !(
          planeRef?.right < parachuteRef?.left ||
          planeRef?.left > parachuteRef?.right ||
          planeRef?.bottom < parachuteRef?.top ||
          planeRef?.top > parachuteRef?.bottom
        )
      ) {
        setisVisible(false);
        setFuel(fuel + 10);
      }
    }
  }, [plane, isVisible, setFuel, fuel]);

  return (
    <>
      {isVisible ? (
        <div
          ref={parachute}
          style={{ left: left }}
          className={[styles.movingElement].join(" ")}
        >
          <img alt="cloud" src={`/images/parachute.png`} />
        </div>
      ) : null}
    </>
  );
};

export default Parachute;
