import React, { useState } from "react";
import { menu } from "./Section/data/data";
import "../styles/global.css";

import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="relative lg:min-h-screen">
        <div className="flex bg-[#1D1042] w-full py-3 px-5 justify-end lg:hidden">
          <button className="" onClick={handleOpenMenu}>
            <AiOutlineMenu className="text-white text-3xl" />
          </button>
        </div>

        <div
          className={`ham-overlay ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } fixed lg:translate-x-0 lg:relative text-white top-0 left-0 w-full h-full bg-[#00000099] lg:bg-transparent opacity-100 transition-transform duration-1000 delay-200 lg:delay-0 lg:duration-0 ease-in-out z-10`}
        >
          <div className="ham flex w-full h-full absolute lg:relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <nav className="flex flex-col justify-between w-[300px] h-full bg-[#1D1042] text-center z-30 px-8 py-6">
              <div className="">
                <div className="flex flex-col gap-8 ">
                  <div className="flex justify-end">
                    <AiOutlineClose
                      className="text-3xl lg:hidden"
                      onClick={handleCloseMenu}
                    />
                  </div>
                  <button className="w-full bg-[#45269c] rounded-lg flex items-center justify-center gap-2 py-3">
                    <BsLightningCharge /> <span>Welcome Keerthi</span>
                  </button>
                </div>
                <ul className="flex flex-col gap-8 py-10">
                  {menu.map((itm, idx) => {
                    const { id, title, icon, link } = itm;
                    return (
                      <li key={id} className="">
                        {id === "" && title === "" && icon === "" ? (
                          <div className="flex h-[1px] bg-white opacity-50"></div>
                        ) : (
                          <div
                            className={`${
                              (title.toLowerCase() === "profile" ||
                                title.toLowerCase() === "logout") &&
                              "opacity-70"
                            } flex items-center gap-2 bg-transparent`}
                          >
                            <span>{icon}</span> <a href={link}>{title}</a>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="py-16">
                <button className="w-full flex items-center justify-center gap-2 bg-[#703EFE] rounded-lg py-4 cursor-pointer hover:bg-purple-700 transition-all duration-300 ease-in">
                  <AiOutlinePlus />{" "}
                  <span className="uppercase">New Project</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
