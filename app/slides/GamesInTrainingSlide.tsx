import { Slide } from "@revealjs/react";
import { PhotoPlaceholder, SlideHeading, SlideKicker } from "./SlideElements";

const GamesInTrainingSlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide games-slide">
      <SlideKicker number="04" label="LEARNING, WITH A LITTLE PLAY" />
      <div className="games-heading-row">
        <div>
          <p className="eyebrow">BREAK TIME = BUILD TIME</p>
          <SlideHeading>Play hard.<br /><span>Think smarter.</span></SlideHeading>
        </div>
        <p className="games-intro">The best way to learn? Try it, test it, laugh, and try again.</p>
      </div>
      <div className="game-cards">
        <article className="game-card game-card-green">
          <PhotoPlaceholder label="Robot race activity photo" size="game-photo" />
          <div className="game-card-footer"><span className="game-number">01</span><div><h3>Robot race</h3><p>Fast builds, faster thinking.</p></div><span className="game-arrow">↗</span></div>
        </article>
        <article className="game-card game-card-yellow">
          <PhotoPlaceholder label="Team challenge activity photo" size="game-photo" />
          <div className="game-card-footer"><span className="game-number">02</span><div><h3>Team challenge</h3><p>One mission. Many ideas.</p></div><span className="game-arrow">↗</span></div>
        </article>
        <article className="game-card game-card-dark">
          <PhotoPlaceholder label="Coding game activity photo" size="game-photo" />
          <div className="game-card-footer"><span className="game-number">03</span><div><h3>Code &amp; create</h3><p>Debugging can be fun.</p></div><span className="game-arrow">↗</span></div>
        </article>
      </div>
      <div className="slide-bottomline"><span>PLAY IS SERIOUS BUSINESS.</span><span>HKI · 2026</span></div>
    </div>
  </Slide>
);

export default GamesInTrainingSlide;
