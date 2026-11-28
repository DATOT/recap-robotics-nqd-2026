"use client";
import { Deck } from "@revealjs/react";
import WelcomeSlide from "./slides/WelcomeSlide";
import ClubDaySlide from "./slides/ClubDaySlide";
import FirstMeetingSlide from "./slides/FirstMeetingSlide";
import FirstDayOfTrainingSlide from "./slides/FirstDayOfTrainingSlide";
import GamesInTrainingSlide from "./slides/GamesInTrainingSlide";
import CongratulationSlide from "./slides/CongratulationSlide";

const page = () => {
  return (
    <Deck
      config={{
        center: false,
        view: "scroll",
        scrollProgress: true,
        scrollLayout: "full",
      }}
    >
      <WelcomeSlide />
      <ClubDaySlide />
      <FirstMeetingSlide />
      <FirstDayOfTrainingSlide />
      <GamesInTrainingSlide />
      <CongratulationSlide />
    </Deck>
  );
};

export default page;
