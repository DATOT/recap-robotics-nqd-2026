import { Slide } from "@revealjs/react";
import { PhotoPlaceholder } from "./SlideElements";

const WelcomeSlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide welcome-slide">
      <div className="welcome-orbit orbit-one" aria-hidden="true" />
      <div className="welcome-orbit orbit-two" aria-hidden="true" />
      <div className="welcome-topline"><span><span className="welcome-mark">R</span> ROBOTICS CLUB · HKI</span><span>RECAP / 2026</span></div>
      <div className="welcome-layout">
        <div className="welcome-copy">
          <p className="welcome-kicker"><span /> A YEAR OF IDEAS IN MOTION</p>
          <h1>RECAP<br /><span>KHÓA 18</span></h1>
          <p className="welcome-subtitle">We dreamed it. We built it.<br />We did it together.</p>
          <div className="welcome-hello">Xin chào <span aria-hidden="true">✳</span></div>
        </div>
        <div className="welcome-photo-wrap">
          <PhotoPlaceholder label="Robotics club team hero photo" size="photo-hero" inverse />
          <span className="photo-float-label">OUR CREW<br />2026</span>
        </div>
      </div>
      <div className="welcome-bottom"><span>SCROLL THROUGH OUR STORY</span><span className="welcome-down">↓</span><span>01 — 06</span></div>
    </div>
  </Slide>
);

export default WelcomeSlide;
