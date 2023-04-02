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

export const hitApi = (star: number, score: number, name: string) => {
  /* 
    can't hit the POST API, this code block should be call API
    ussualy I use Axios to fetch data
    in the test description there is no API endpoint to hit
  */
  const dataSend = {
    star,
    score,
    name,
  };
  console.log(dataSend);
};
