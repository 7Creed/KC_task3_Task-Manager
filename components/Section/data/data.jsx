import React from "react";
import { BsPeople, BsLightningCharge } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { TbAffiliate } from "react-icons/tb";
import {
  AiOutlineDashboard,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineUserAdd,
} from "react-icons/ai";

export const todoObj = [
  {
    id: 1,
    task: "To Do",
    no_task: 2,
    pro_image: "/image/card-image-1.png",
    title: "Highfidelity Design",
    desc: "Make clear design and color",
    bar: "",
    img: "/image/teacher-1.png",
  },
  {
    id: 2,
    task: "To Do",
    no_task: 2,
    pro_image: "",
    title: "Usability Design",
    desc: "Make clear design and color",
    bar: "",
    img: "/image/teacher-1.png",
  },
];

export const inProgress = [
  {
    id: 1,
    task: "In Progress",
    no_task: 1,
    pro_image: "/image/card-image-2.png",
    title: "Highfidelity Design",
    desc: "Make clear design and color, and see the beauty of the picture",
    bar: "",
    img: "/image/teacher-5.png",
  },
];

export const completedData = [
  {
    id: 1,
    task: "Completed",
    no_task: 2,
    pro_image: "/image/card-image-3.png",
    title: "Usability Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa",

    bar: "",
    img: "/image/teacher-6.png",
  },
  {
    id: 2,
    task: "Completed",
    no_task: 2,
    pro_image: "",
    title: "Highfidelity Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa",

    bar: "",
    img: "/image/teacher-6.png",
  },
];

export const menu = [
  { id: 1, title: "Dashboard", icon: <AiOutlineDashboard />, link: "/" },
  { id: 2, title: "Settings", icon: <LuSettings2 />, link: "/" },
  { id: 3, title: "Activities", icon: <BsLightningCharge />, link: "/" },
  { id: 4, title: "Users", icon: <BsPeople />, link: "/" },
  { id: 5, title: "Added user", icon: <AiOutlineUserAdd />, link: "/" },
  { id: 6, title: "Affiliate", icon: <TbAffiliate />, link: "/" },
  { id: "", title: "", icon: "", link: "" },
  { id: 7, title: "Profile", icon: <BsLightningCharge />, link: "/" },
  { id: 8, title: "Logout", icon: <BsPeople />, link: "/" },
];
