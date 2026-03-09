import React, { useState } from "react";
import Button from "./../Button";
import Wrapper from "./../Wrapper";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// const NAV_LINKS = ["about", "gallery", "plant a Tree"];
const NAV_LINKS = [
  { id: 1, link: "about", href: "#about" },
  { id: 2, link: "gallery", href: "#gallery" },
  { id: 3, link: "plant a Tree", href: "#plant_a_tree" },
];


const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="bg-[#15803d] py-2 fixed z-10 top-0 left-0 right-0 ">
      <Wrapper extraClasses={"flex items-center justify-between  text-white"}>
        <a href="#">
          <h1 className="uppercase text-2xl font-bold tracking-tighter">
          Green <span className="tracking-widest ">Earth</span>
        </h1>
        </a>
        <ul className="items-center gap-6 hidden md:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className="capitalize transition-colors duration-150 font-semibold  hover:text-[#facc15]"
            >
              <a href={link.href}>{link.link}</a>
            </li>
          ))}
        </ul>
        <a href="#plant_a_tree" className="hidden md:block">
          <Button content={"Pant a Tree"} />
        </a>

        <AnimatePresence>
          {isMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#15803d] p-4 shadow  fixed top-13 w-full left-0 block md:hidden z-10 overflow-y-hidden"
            >
              <ul className=" text-center max-w-6xl mx-auto space-y-3">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.id}
                    className="capitalize font-semibold  hover:text-[#facc15]"
                  >
                    <a href={link.href}>{link.link}</a>
                  </li>
                ))}
                <a href="#plant_a_tree">
                  <Button content={"Pant a Tree"} extraClass="" />
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="block md:hidden"
          onClick={() => setIsMenu((p) => !p)}
        >
          {!isMenu ? <Menu /> : <X />}
        </button>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
