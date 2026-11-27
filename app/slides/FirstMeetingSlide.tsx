import { Slide } from "@revealjs/react";
import { PhotoPlaceholder, SlideHeading, SlideKicker } from "./SlideElements";

const FirstMeetingSlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide meeting-slide">
      <SlideKicker number="02" label="A TEAM TAKES SHAPE" />
      <div className="meeting-layout">
        <div className="meeting-copy">
          <p className="eyebrow">AFTER CLUB DAY</p>
          <SlideHeading>First meeting.<br /><span>First big plans.</span></SlideHeading>
          <p className="slide-description">Names, ideas, and the first sketches of what we could create together.</p>
          <div className="meeting-agenda">
            <div><span className="agenda-index">01</span><span>Meet the crew</span><span>↗</span></div>
            <div><span className="agenda-index">02</span><span>Share wild ideas</span><span>↗</span></div>
            <div><span className="agenda-index">03</span><span>Make a plan</span><span>↗</span></div>
          </div>
        </div>
        <div className="meeting-photos">
          <PhotoPlaceholder label="First meeting group photo" size="photo-meeting-main" />
          <PhotoPlaceholder label="Planning session detail photo" size="photo-meeting-detail" />
          <span className="photo-sticker">IDEAS<br />IN MOTION</span>
        </div>
      </div>
      <div className="slide-bottomline"><span>EVERY GREAT BUILD STARTS WITH A PLAN.</span><span>HKI · 2026</span></div>
    </div>
  </Slide>
);

export default FirstMeetingSlide;
