import { isBrowser } from "./isBrowser";

export const saveScore = (score: number) => {
  if (isBrowser()) {
    localStorage.setItem("user_score", score.toString());
  }
};

export const getScore = () => {
  if (isBrowser()) {
    const score: any = localStorage.getItem("user_score");

    return parseInt(score);
  }
};
export const saveStar = (score: number) => {
  if (isBrowser()) {
    localStorage.setItem("user_star", score.toString());
  }
};

export const getStar = () => {
  if (isBrowser()) {
    const star: any = localStorage.getItem("user_star");

    return parseInt(star);
  }
};
