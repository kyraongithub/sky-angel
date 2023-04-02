/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Bird from "@/components/elements/Bird";
import Button from "@/components/elements/Button";
import Cloud from "@/components/elements/Cloud";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Gameplay.module.scss";
const GameScene = (props: any) => {
  const { score, fuel, isPaused, setisPaused, scene } = props;
  const [left, setleft] = useState<number>(0);
  const [top, settop] = useState<number>(240);
  const [clouds, setclouds] = useState<any>([]);
  const [birds, setbirds] = useState<any>([]);

  const planePosition = {
    left: `${left}px`,
    top: `${top}px`,
  };

  const plane = useRef(null);

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.key === "ArrowLeft") {
        if (left > 0) {
          setleft(left - 30);
        }
      } else if (event.key === "ArrowRight") {
        if (left < 768) {
          setleft(left + 30);
        }
      } else if (event.key === "ArrowUp") {
        if (top > 0) {
          settop(top - 30);
        }
      } else if (event.key === "ArrowDown") {
        if (top < 500) {
          settop(top + 30);
        }
      }
    }

    if (fuel > 0) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fuel, left, top]);

  useEffect(() => {
    const interval = setInterval(() => {
      setclouds((prevElements: any) => [
        ...prevElements,
        { id: Math.random() },
      ]);
    }, 2000);

    const intervalBird = setInterval(() => {
      setbirds((prevElements: any) => [...prevElements, { id: Math.random() }]);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(intervalBird);
    };
  }, []);
  useEffect(() => {
    if (isPaused) {
      setclouds([]);
    }
  }, [isPaused]);

  return (
    <>
      {scene === "endgame" ? (
        <div>end</div>
      ) : isPaused ? (
        <div>
          <p>Game Paused</p>
          <Button onClick={() => setisPaused(false)}>Continue</Button>
        </div>
      ) : (
        <div>
          <div className={styles.header}>
            <p>Time: {score}</p>
            <p>Fuel: {fuel}</p>
            <p>Stars: 0</p>
            <Button onClick={() => setisPaused(true)}>Pause</Button>
          </div>
          <div>
            <div className={styles["clouds"]}>
              {clouds.map((item: any, index: number) => {
                return <Cloud key={index} />;
              })}
            </div>
            <div className={styles["birds"]}>
              {birds.map((item: any, index: number) => {
                return <Bird plane={plane} key={index} />;
              })}
            </div>
            <img
              style={planePosition}
              className={styles.plane}
              alt="plane"
              ref={plane}
              src="/images/plane.png"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GameScene;
