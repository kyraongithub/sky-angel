import { saveScore, saveStar } from "@/utils/common";

type Scene = "home" | "gameplay" | "endgame";

export const endGameHandler = (
  score: number,
  star: number,
  setScene: (e: Scene) => void
) => {
  saveScore(score);
  saveStar(star);
  setScene("endgame");
};
