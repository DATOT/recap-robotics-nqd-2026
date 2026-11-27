"use client";

import { Deck, Slide } from "@revealjs/react";
import ClubDaySlide from "./slides/ClubDaySlide";
import CongratulationSlide from "./slides/CongratulationSlide";
import FirstDayOfTrainingSlide from "./slides/FirstDayOfTrainingSlide";
import FirstMeetingSlide from "./slides/FirstMeetingSlide";
import GamesInTrainingSlide from "./slides/GamesInTrainingSlide";
import WelcomeSlide from "./slides/WelcomeSlide";

export default function Home() {
  return (
    <main className="presentation-app">
      <header className="app-header">
        <a className="brand" href="#" aria-label="Robotics Club Recap home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-copy">
            <strong>ROBOTICS CLUB</strong>
            <span>KHÓA 18 · YEAR IN REVIEW</span>
          </span>
        </a>
        <div className="header-note"><span className="status-dot" /> A season of building together</div>
        <div className="key-hint">Navigate <kbd>←</kbd><kbd>→</kbd></div>
      </header>

      <section className="deck-stage" aria-label="Robotics club recap presentation">
        <Deck config={{
          width: 1280,
          height: 720,
          margin: 0.06,
          minScale: 0.25,
          maxScale: 1.5,
          controls: true,
          progress: true,
          slideNumber: true,
          hash: true,
          transition: "slide",
          backgroundTransition: "fade",
        }}>
          <WelcomeSlide />
          <ClubDaySlide />
          <FirstMeetingSlide />
          <FirstDayOfTrainingSlide />
          <GamesInTrainingSlide />
          <CongratulationSlide />
        </Deck>
      </section>

      <footer className="app-footer">
        <span>DESIGNED TO BUILD WHAT’S NEXT</span>
        <span>RECAP · 2026</span>
      </footer>
    </main>
  );
}
