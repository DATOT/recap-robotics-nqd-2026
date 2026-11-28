import { Slide, Fragment } from "@revealjs/react";

const ClubDaySlide = () => (
  <Slide backgroundColor="#ffffff">
    <p>Hãy bắt đầu bằng...</p>
    <Fragment as="div" animation="fade-in-then-out">
      <h1 style={{ color: "#406d50" }}>CLUB DAY!!!</h1>
      <h2>05/09</h2>
      <div className="grid grid-cols-2">
        <img className="col-span-2 rounded-xl" src="clubday/clubday2.jpg" />
        <img className="rounded-xl" src="clubday/clubday1.jpg" />
        <img className="rounded-xl" src="clubday/clubday3.jpg" />
      </div>
    </Fragment>
  </Slide>
);

export default ClubDaySlide;
