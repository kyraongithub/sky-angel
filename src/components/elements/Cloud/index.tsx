/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "./MovingElement.module.scss";

const Cloud = (props: any) => {
  const [top, setTop] = useState<number>(0);
  const [cloud, setcloud] = useState<number>(1);
  const [isVisible, setisVisible] = useState<boolean>(true);

  useEffect(() => {
    setTop(Math.floor(Math.random() * (500 - 0 + 1) + 0));
    setcloud(Math.floor(Math.random() * (2 - 1 + 1) + 1));
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      {isVisible ? (
        <div style={{ top: top }} className={[styles.movingElement].join(" ")}>
          <img alt="cloud" src={`/images/cloud${cloud}.png`} />
        </div>
      ) : null}
    </>
  );
};

export default Cloud;
