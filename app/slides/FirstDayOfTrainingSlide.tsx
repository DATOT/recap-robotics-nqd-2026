import { Slide } from "@revealjs/react";
import { PhotoPlaceholder, SlideHeading, SlideKicker } from "./SlideElements";

const FirstDayOfTrainingSlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide training-slide">
      <SlideKicker number="03" label="THE BUILD BEGINS" />
      <div className="training-top">
        <div>
          <p className="eyebrow">WEEK 01 · FIRST DAY OF TRAINING</p>
          <SlideHeading>From curious<br /><span>to capable.</span></SlideHeading>
          <p className="slide-description">Twelve weeks of learning by doing. We started with the fundamentals—and a lot of questions.</p>
        </div>
        <PhotoPlaceholder label="First training day photo" size="photo-training" />
      </div>
      <div className="training-track" aria-label="Course journey">
        <div className="track-item track-active"><span className="track-number">01</span><span>Discover</span></div>
        <span className="track-line" />
        <div className="track-item"><span className="track-number">02</span><span>Design</span></div>
        <span className="track-line" />
        <div className="track-item"><span className="track-number">03</span><span>Build</span></div>
        <span className="track-line" />
        <div className="track-item"><span className="track-number">04</span><span>Celebrate</span></div>
      </div>
      <div className="slide-bottomline"><span>SMALL STEPS. BIG IDEAS.</span><span>HKI · 2026</span></div>
    </div>
  </Slide>
);

export default FirstDayOfTrainingSlide;
