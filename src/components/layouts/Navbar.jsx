import React from "react";
import Button from "./../Button";
import Wrapper from "./../Wrapper";

const NAV_LINKS = ["about", "gallery", "plant a Tree"];

const Navbar = () => {
  return (
    <nav className="bg-[#15803d] py-4">
      <Wrapper extraClasses={"flex items-center justify-between  text-white"}>
        <h1 className="text-xl font-bold tracking-tighter">Green Earth</h1>
        <ul className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <li className="capitalize transition-colors duration-150 font-semibold  hover:text-[#facc15]">
              <a href={`${link}-section`}>{link}</a>
            </li>
          ))}
        </ul>
        <Button content={"Pant a Tree"} />
      </Wrapper>
    </nav>
  );
};

export default Navbar;
