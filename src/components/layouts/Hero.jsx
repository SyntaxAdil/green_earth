import React from "react";

import HERO_IMAGE_LEFT from "./../../assets/hero-leaf1.png";
import HERO_IMAGE_RIGHT from "./../../assets/hero-leaf2.png";
import Button from "./../Button";


const Hero = () => {
  return (
    <section className="w-full bg-image  bg-[#cff0dc] grid grid-cols-1 md:grid-cols-4 py-15 px-4   md:py-0 items-center justify-between">
      <img src={HERO_IMAGE_LEFT} alt="hero" className="w-full hidden md:block " />
      <div className="text-left md:text-center space-y-6 col-span-2 pt-0 md:pt-8 ">
        <h3 className="text-5xl md:text-4xl  text-[#1F2937] leading-13 md:leading-5 font-bold ">Plant a Tree, <span className="text-[#237c46]">Grow a Future</span></h3>
        <p className="text-lg md:text-sm text-[#1F2937] max-w-125 mx-auto mb-4">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>
        <Button content={"Get Involved"} />
      </div>
      <img src={HERO_IMAGE_RIGHT} alt="hero" className="w-full hidden md:block" />
    </section>
  );
};

export default Hero;
