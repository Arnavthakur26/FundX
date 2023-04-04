import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "../styles/Home.css";

const HeroAnimation = () => {
  return (
    <>
      <div className="animation-gradient absolute w-[500px] h-[500px]"></div>
      <Player
        autoplay
        loop
        src="https://lottie.host/eb5de302-2197-4649-a660-fd0044792a2c/fykIvnkKLk.json"
        // src="https://assets5.lottiefiles.com/packages/lf20_shg2mDy2hw.json"
        style={{ height: "500px", width: "500px" }}
      >
        <Controls visible={false} buttons={["play", "repeat", "debug"]} />
      </Player>
    </>
  );
};

export default HeroAnimation;
