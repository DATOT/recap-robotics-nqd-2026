"use client";
import Image from "next/image";
import { Slide, Fragment } from "@revealjs/react";

interface GroupType {
  img_src: string;
  name: string;
}

const groups: GroupType[] = [
  { img_src: "/training/web_app.jpg", name: "Web / App" },
  { img_src: "/training/arduino.jpg", name: "Arduino & RaspberryPi" },
  { img_src: "/training/drone.jpg", name: "Lego, UAV/Drone" },
];

const FirstDayOfTrainingSlide = () => (
  <Slide>
    <Slide>
      <h2 className="mb-8 text-4xl">Và từ đó CLB được chia ra làm 3:</h2>
      <div className="grid grid-cols-3 gap-6 items-center">
        {groups.map((group) => (
          <Fragment
            key={group.name}
            as="div"
            className="flex flex-col items-center gap-3"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md">
              <Image
                src={group.img_src}
                alt={group.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-2xl font-semibold">{group.name}</p>
          </Fragment>
        ))}
      </div>
    </Slide>

    <Slide backgroundColor="#282934" color="#b993f3">
      <Fragment asChild animation="fade-in-then-semi-out">
        <h2 style={{ color: "#b993f3" }} className="text-4xl mb-2">
          Ngày đầu tiên
        </h2>
      </Fragment>
      <Fragment as="div">
        <h2 style={{ color: "#dae097" }} className="text-3xl mb-6">
          trong chuỗi 12 tuần training của Web/App
        </h2>

        <h3 style={{ color: "#dae097" }} className="text-3xl mb-6">
          18/09
        </h3>
      </Fragment>

      <Fragment
        as="div"
        className="flex flex-col items-center gap-4 w-full h-[700px]"
      >
        <div className="relative w-full flex-1 overflow-hidden rounded-xl">
          <Image
            src="/training/training2.png"
            alt="Web/App Training 2"
            fill
            className="object-contain border-1 border-black"
          />
        </div>
        <div className="relative w-full flex-1 overflow-hidden rounded-xl">
          <Image
            src="/training/training1.png"
            alt="Web/App Training 1"
            fill
            className="object-contain border border-black"
          />
        </div>
      </Fragment>
    </Slide>
  </Slide>
);

export default FirstDayOfTrainingSlide;
