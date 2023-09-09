// import React from "react";
import { AiOutlineUnorderedList, AiOutlinePlus } from "react-icons/ai";
import { BsPeople, BsLightningCharge } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

const Header = () => {
  const img = [
    "/image/teacher-1.png",
    "/image/teacher-5.png",
    "/image/teacher-6.png",
  ];

  const view = [
    {
      id: 1,
      icon: <BsPeople />,
      title: "Participants View",
    },
    {
      id: 2,
      icon: <GrGroup />,
      title: "Board View",
    },
    {
      id: 3,
      icon: <AiOutlineUnorderedList />,
      title: "List View",
    },
    {
      id: 4,
      icon: <BsLightningCharge />,
      title: "Power View",
    },
    {
      id: 5,
      icon: <AiOutlinePlus />,
    },
  ];

  return (
    <header className="w-full flex-col md:flex-row">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-0 md:items-center md:justify-between">
        <div className="w-full flex-col md:flex-row md:gap-0 md:items-center justify-between pt-5 mt-5 md:py-5">
          <h1 className="text-[2.375rem] font-semibold tracking-[-0.02rem]">
            New Campaign Run
          </h1>
          <p className="text-gray-400 text-[0.875rem]">
            A new campaign launch work for brand new feature in May month
          </p>
        </div>
          <button className="mr-auto bg-black py-3 px-7 text-white rounded-lg uppercase text-sm whitespace-nowrap">
            Add members
          </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-5 md:pb-0">
          <div className="flex">
            {img.map((each, idx) => (
              <img
                key={idx}
                src={each}
                alt=""
                className="w-8 aspect-square border-2 border-white rounded-full -ml-2"
              />
            ))}
          </div>
          <p className="text-gray-400 text-[0.875rem]">7 members</p>
        </div>
        <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {view.map((item, idx) => {
            const { id, icon, title } = item;
            return (
              <li
                key={id}
                className="flex gap-1 items-center opacity-60 hover:opacity-100"
              >
                {icon}
                <p>{title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
