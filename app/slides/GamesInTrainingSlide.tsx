"use client";
import { Slide } from "@revealjs/react";

let images: string[] = [
  "games/game1.png",
  "games/game2.png",
  "games/game3.png",
  "games/game4.png",
  "games/game5.png",
];
const GamesInTrainingSlide = () => (
  <Slide backgroundColor="#406d50" color="#ffffff">
    <h2>Các trò chơi đã chơi:</h2>
    <div className="grid grid-cols-2">
      {images.map((v, i) => (
        <img src={v} className={i == 0 ? "col-span-2" : ""} />
      ))}
    </div>
  </Slide>
);

export default GamesInTrainingSlide;
