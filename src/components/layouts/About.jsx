import React from "react";
import Wrapper from "./../Wrapper";
import ABOUT_IMAGE from "../../assets/about-image.png";
import Heading from './../Heading';
const About = () => {
  return (
    <section>
        <Heading content={"About the Campaign"} />
      <Wrapper extraClasses=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16 pb-16">
        <div>
          <img src={ABOUT_IMAGE} alt="about" className="mx-auto" />
        </div>

        <div>
          <p className="text-[#1F2937]">
            Green Earth is a global tree plantation initiative dedicated to
            fighting climate change. Since our start, we’ve planted over 500,000
            trees worldwide. By joining our campaign, you help restore forests,
            create habitats for wildlife, and combat global warming.
          </p>
          <ul className="text-[#1F2937] list-disc p-6">
            <li>Restoration of natural habitats</li>
            <li>Improvement of air quality</li>
            <li>Support for local communities</li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
