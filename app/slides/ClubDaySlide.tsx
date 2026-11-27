import { Slide } from "@revealjs/react";
import { PhotoPlaceholder, SlideHeading, SlideKicker } from "./SlideElements";

const ClubDaySlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide club-day-slide">
      <SlideKicker number="01" label="THE FIRST SPARK" />
      <div className="club-day-layout">
        <div className="slide-copy">
          <p className="eyebrow">05 SEPTEMBER · CLUB DAY</p>
          <SlideHeading>We met.<br /><span>We made things.</span></SlideHeading>
          <p className="slide-description">A room full of curious minds, a table full of parts, and the beginning of something brilliant.</p>
          <div className="pill-row"><span className="pill">Curiosity</span><span className="pill">Teamwork</span><span className="pill">Robotics</span></div>
        </div>
        <div className="photo-grid photo-grid-club">
          <PhotoPlaceholder label="Club day group photo" size="photo-large" />
          <PhotoPlaceholder label="Hands-on activity photo" size="photo-small" />
          <div className="photo-caption">THE BEGINNING OF OUR STORY <span>↗</span></div>
        </div>
      </div>
      <div className="slide-bottomline"><span>GOOD IDEAS START WITH GOOD PEOPLE.</span><span>HKI · 2026</span></div>
    </div>
  </Slide>
);

export default ClubDaySlide;
