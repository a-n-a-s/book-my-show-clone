import React from "react";
import Logo from "../Navbar/logo.svg";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-navbarColor w-full h-36 flex flex-col ">
      <div className="h-1/3 flex items-center justify-center w-full my-4">
        <img src={Logo} alt="" className="h-full" />
      </div>
      <div className="flex justify-center items-center gap-10 my-1">
        <FaFacebook className="text-white  " size={30} />
        <AiFillInstagram className="text-white " size={30} />
        <AiFillYoutube className="text-white" size={30} />
        <FaPinterest className="text-white " size={30} />
        <AiFillTwitterCircle className="text-white " size={30} />
      </div>
    </div>
  );
};

export default Footer;
