import React , {useContext} from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
  BiShareAlt
} from "react-icons/bi";
import { ReactComponent as YourSvg } from './logo.svg';

import {MovieContext } from '../../Context/movie.context'

const NavSm = () => {
  const {movie} = useContext(MovieContext)
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-1xl font-bold font-sans">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full text-gray-300" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-row items-center ml-20 w-3/6">
          <YourSvg className="w-40"/>
          <div className="bg-gray-100 flex flex-row mx-2 p-1 w-full rounded">
            <BiSearch className="text-gray-900 text-xl m-1 bg-tranparent " />
            <input
              type="text"
              placeholder="Search For Events,Shows,Activities..."
              className="focus:outline-none w-full bg-tranparent "
            />
          </div>
        </div>
        <div className="flex flex-row justify-end ml-20 text-gray-100 items-center w-2/6">
          <span  className="cursor-pointer font-light ">Hyderabad</span>
          <BiChevronDown  className="mx-1"/>
          <button className="mx-2 bg-signupButton py-2  px-4 text-xs npm  font-bold text-center rounded">Sign In</button>
          <div className="mx-2 w-8 h-8 ">
          <BiMenu className="w-full h-full" />
          </div>
          
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="lg:bg-navbarColor p-4 absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:block m lg:hidden">
          {/* Medium/Tab screen */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
