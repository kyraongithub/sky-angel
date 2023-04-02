import GameScene from "@/components/container/GameplayScene";
import HomeScene from "@/components/container/HomeScene";
import React from "react";
import { Props } from "./Types.type";

const Homepage = (props: Props) => {
  const { scene } = props;
  return scene === "home" ? <HomeScene {...props} /> : <GameScene {...props} />;
};

export default Homepage;
