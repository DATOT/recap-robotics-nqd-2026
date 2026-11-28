"use client";
import { Slide, Fragment } from "@revealjs/react";
import localFont from "next/font/local";
import { Kalam } from "next/font/google";
import { MdKeyboardArrowDown } from "react-icons/md";

const flipside = localFont({
  src: "../fonts/flipside.ttf",
});
const kalam = Kalam({ weight: "400" });
const WelcomeSlide = () => (
  <Slide
    backgroundColor="#406d50"
    color="#ffffff"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      textAlign: "center",
    }}
  >
    <Fragment
      animation="fade-out"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Kéo xuống
      <MdKeyboardArrowDown />
    </Fragment>
    <Fragment animation="fade-in-then-semi-out">
      <h1
        className={kalam.className}
        style={{
          fontFamily: kalam.style.fontFamily,
          fontSize: "11.5rem",
          fontStyle: "black",
        }}
      >
        RECAP
      </h1>
    </Fragment>

    <Fragment animation="fade-in-then-semi-out">
      <h1
        className={kalam.className}
        style={{
          fontFamily: kalam.style.fontFamily,
          fontSize: "6.5rem",
          fontStyle: "black",
        }}
      >
        HKI KHÓA 18
      </h1>
    </Fragment>

    <Fragment animation="fade-in-then-semi-out">
      <h2
        className={flipside.className}
        style={{ fontFamily: flipside.style.fontFamily, fontSize: "3.5rem" }}
      >
        NQD ROBOTICS CLUB
      </h2>
    </Fragment>
  </Slide>
);

export default WelcomeSlide;
