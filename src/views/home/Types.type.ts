type Scene = "home" | "gameplay" | "endgame";
type End = "fuel" | "crash";

export type Props = {
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
};
