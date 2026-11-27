import { Slide } from "@revealjs/react";
import { PhotoPlaceholder, SlideHeading, SlideKicker } from "./SlideElements";

const CongratulationSlide = () => (
  <Slide className="slide-section">
    <div className="robotics-slide congrats-slide">
      <SlideKicker number="05" label="LOOK HOW FAR WE’VE COME" inverse />
      <div className="congrats-content">
        <div className="congrats-copy">
          <p className="eyebrow eyebrow-light">12 WEEKS · ONE TEAM</p>
          <SlideHeading>Built with<br /><span>brilliant people.</span></SlideHeading>
          <p className="slide-description">Congratulations on finishing the course. Every challenge, late-night fix, and small win brought us here.</p>
          <div className="congrats-signoff">THE FUTURE IS OURS TO BUILD <span>✳</span></div>
        </div>
        <PhotoPlaceholder label="Team celebration or graduation photo" size="photo-team" inverse />
      </div>
      <div className="slide-bottomline slide-bottomline-light"><span>KEEP MAKING. KEEP WONDERING.</span><span>ROBOTICS CLUB · HKI</span></div>
    </div>
  </Slide>
);

export default CongratulationSlide;
