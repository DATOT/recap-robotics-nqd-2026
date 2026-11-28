"use client";
import Image from "next/image";
import { Slide, Fragment } from "@revealjs/react";
import qrImage from "@/public/first_meeting/quy_robotics.jpg";

const FirstMeetingSlide = () => (
  <Slide>
    Sau club day chúng ta có...
    <Fragment as="div">
      <h1>FIRST MEETING</h1>
      <h3>13/09</h3>
      Các thành viên trong clb đã có cơ hội gặp gỡ nhau
    </Fragment>
    <Fragment
      as="div"
      className="flex flex-col items-center justify-center gap-4"
    >
      <Image
        src={qrImage}
        alt="QR quỹ clb"
        className="max-h-72 w-auto object-contain"
      />
      <p className="text-2xl">Quỹ clb cho bạn nào chưa đóng, hehe</p>
    </Fragment>
  </Slide>
);

export default FirstMeetingSlide;
