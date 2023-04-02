export type Props = {
  score: number;
  setScore: (e: number) => void;
  fuel: number;
  setFuel: (e: number) => void;
  scene: "home" | "gameplay";
  setScene: (e: "home" | "gameplay") => void;
};
