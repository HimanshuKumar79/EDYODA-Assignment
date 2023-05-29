import React from "react";
import EDYODA from "../assets/EDYODA.png";
import Search from "../assets/search.png";
import { IoIosArrowDown } from "react-icons/io";
const NavBar = () => {
  return (
    <div className="w-full h-fit bg-white fixed top-0 z-10">
      <div className="w-[1380px] mx-auto h-[56px] flex justify-between items-center">
        {/* LEFT */}
        <div className="w-[600px] h-full flex items-center gap-[60px]">
          <img src={EDYODA} alt="Logo" className=" h-[30px]" />
          <div className="flex items-center h-[26px] gap-4">
            <p className="text-[16px] h-full">Courses</p>
            <IoIosArrowDown className="mt-[2px]" />
          </div>
          <div className="flex items-center h-[26px] gap-4">
            <p className="text-[16px] h-full">Programs</p>
            <IoIosArrowDown className="mt-[2px]" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[600px] h-full flex items-center justify-end gap-[60px]">
          <img src={Search} alt="Search" className=" mt-1" />
          <p>Login</p>
          <div className="bg-gradient-to-r from-[#0096FF] to-[#0048FF] text-white font-[600] px-9 py-[5px] rounded-2xl">
            JOIN NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
