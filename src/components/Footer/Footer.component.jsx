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
    <div className="bg-navbarColor w-full h-36 flex  flex-row justify-center">
      <div className="h-1/3">
        <img src={Logo} alt="" className="h-full" />
      </div>
      <div className="flex justify-center items-center ">
        <FaFacebook className="text-white  " />
        <AiFillInstagram className="text-white " />
        <AiFillYoutube className="text-white" />
        <FaPinterest className="text-white " />
        <AiFillTwitterCircle className="text-white "/>
      </div>
    </div>
  );
};

export default Footer;
