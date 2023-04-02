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
});

type Props = {
  children: ReactNode;
};

type Scene = "home" | "gameplay" | "endgame";

export const GlobalContextProvider = (props: Props) => {
  const [score, setScore] = useState<number>(0);
  const [star, setstar] = useState<number>(0);
  const [fuel, setFuel] = useState<number>(10);
  const [scene, setScene] = useState<Scene>("home");
  const [isPaused, setisPaused] = useState<boolean>(false);

  useEffect(() => {
    if (scene === "gameplay" && !isPaused) {
      let interval = setInterval(() => {
        if (fuel > 0) {
          setFuel(fuel - 1);
          setScore(score + 1);
        } else {
          endGameHandler(score, star, setScene);
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
