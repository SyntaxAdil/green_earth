import React, { useState } from "react";
import Button from "./../Button";
import Wrapper from "./../Wrapper";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = ["about", "gallery", "plant a Tree"];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="bg-[#15803d] py-2">
      <Wrapper extraClasses={"flex items-center justify-between  text-white"}>
        <h1 className="text-2xl md:text-xl font-bold tracking-tighter">
          Green Earth
        </h1>
        <ul className="items-center gap-6 hidden md:flex">
          {NAV_LINKS.map((link) => (
            <li className="capitalize transition-colors duration-150 font-semibold  hover:text-[#facc15]">
              <a href={`${link}-section`}>{link}</a>
            </li>
          ))}
        </ul>
        <Button content={"Pant a Tree"} extraClass="hidden md:block" />

        <AnimatePresence>
          {isMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#15803d] p-4 shadow  fixed top-18 w-full left-0 block md:hidden z-10 overflow-y-hidden"
            >
              <ul className=" text-center max-w-6xl mx-auto space-y-3">
                {NAV_LINKS.map((link) => (
                  <li className="capitalize font-semibold  hover:text-[#facc15]">
                    <a href={`${link}-section`}>{link}</a>
                  </li>
                ))}
                <Button content={"Pant a Tree"} extraClass="" />
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
