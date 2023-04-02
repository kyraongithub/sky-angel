import { endGameHandler } from "@/services/Game";
import { ReactNode, createContext, useState, useEffect } from "react";

interface IEnvContext {
  star: number;
  setstar: (e: number) => void;
  score: number;
  setScore: (e: number) => void;
  fuel: number;
  setFuel: (e: number) => void;
  scene: Scene;
  setScene: (e: Scene) => void;
  isPaused: boolean;
  setisPaused: (e: boolean) => void;
  endCause: End;
  setEndCause: (e: End) => void;
}

export const GlobalContext = createContext<IEnvContext>({
  star: 0,
  setstar: () => {},
  score: 0,
  setScore: () => {},
  fuel: 10,
  setFuel: () => {},
  scene: "home",
  setScene: () => {},
  isPaused: false,
  setisPaused: () => {},
  endCause: "crash",
  setEndCause: () => {},
});

type Props = {
  children: ReactNode;
};

type Scene = "home" | "gameplay" | "endgame";
type End = "fuel" | "crash";

export const GlobalContextProvider = (props: Props) => {
  const [score, setScore] = useState<number>(0);
  const [star, setstar] = useState<number>(0);
  const [fuel, setFuel] = useState<number>(10);
  const [scene, setScene] = useState<Scene>("home");
  const [isPaused, setisPaused] = useState<boolean>(false);
  const [endCause, setEndCause] = useState<End>("crash");

  useEffect(() => {
    if (scene === "gameplay" && !isPaused) {
      let interval = setInterval(() => {
        if (fuel > 0) {
          setFuel(fuel - 1);
          setScore(score + 1);
        } else {
          endGameHandler(score, star, setScene);
          setEndCause("fuel");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [fuel, isPaused, scene, score, star]);

  return (
    <GlobalContext.Provider
      value={{
        score,
        setScore,
        fuel,
        setFuel,
        scene,
        setScene,
        isPaused,
        setisPaused,
        star,
        setstar,
        endCause,
        setEndCause,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
