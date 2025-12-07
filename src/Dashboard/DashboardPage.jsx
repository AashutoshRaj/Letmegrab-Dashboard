import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import DashBoardData from "./DashBoardData/DashBoardData";
import arrowButton from "../assets/Images/buttonArrow.png";
import LandingPage from "../LandingPage/LandingPage";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // const [isHalfSideBar, setIsHalfSideBar] = useState(false);

  const handleHalfSideBar = () => {
    setIsOpen((prev) => !prev);
    console.log("halfSideBar");
  };

  return (
    <>
      <div className="flex flex-row items-start relative">
        <div
          className={` h-screen w-full  border-r border-[#F3F5F7] bg-white p-2 pt-4 xl:p-4 sm:relative  ease-in-out sm:max-w-[100px] xl:max-w-[286px] xl:flex-[286px] 
        fixed bg-white  max-w-[100%] z-2 sm:relative 
        ${!isMobileOpen ? "left-[-100%]  transition-all delay-150 sm:transition-none" : "left-[0] transition-all delay-150 sm:transition-none "}
         sm:static sm:translate-x-0
        ${isOpen ? "xl:!max-w-[100px] xl:flex-[100px] !p-2" : " "}
       
        `}
        >
          <button
            className="hidden xl:block absolute sm:right-[-15px] cursor-pointer z-5 "
            onClick={handleHalfSideBar}
          >
            <img src={arrowButton} alt="arrowBtn" />
          </button>
          <button
            className="block sm:hidden absolute sm:right-[-15px] cursor-pointer z-5"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <img src={arrowButton} alt="arrowBtn" />
          </button>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className={` 
         
          xl:flex-[100%]
          bg-[#F9FAFB] min-h-screen w-full sm:max-w-[calc(100%-100px)] 
          ${!isOpen ? "xl:max-w-[calc(100%-286px)] w-full " : " "} 
            
            `}
        >
          <div className="">
            <DashBoardData setIsOpen={setIsMobileOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
