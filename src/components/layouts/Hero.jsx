import React from "react";
import Button from "./../Button";

const Hero = () => {
  return (
    <section className="w-full bg-[#cff0dc] md:hero-image p-16 px-4 mt-14">
      <div className="text-left md:text-center space-y-6 col-span-2 pt-0 md:pt-8 ">
        <h3 className="text-5xl md:text-4xl  text-[#1F2937] leading-13 md:leading-5 font-bold ">
          Plant a Tree, <span className="text-[#237c46]">Grow a Future</span>
        </h3>
        <p className="text-lg md:text-sm text-[#1F2937] max-w-125 mx-auto mb-4">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>
        <a href="#plant_a_tree"><Button content={"Get Involved"} /></a>
      </div>
    </section>
  );
};

export default Hero;
