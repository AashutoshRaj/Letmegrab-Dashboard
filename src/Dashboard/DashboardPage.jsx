import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import DashBoardData from "./DashBoardData/DashBoardData";
import arrowButton from "../assets/Images/buttonArrow.png";
import LandingPage from "../LandingPage/LandingPage";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);


  const handleSubmit = () => {
    setIsOpen((prev) => !prev);
    console.log("sdfsdfds")
  };

  
  return (
   <>  
    <div className="flex flex-row items-start relative">
      <div
        className={`transition-all delay-150 h-screen w-full  border-r border-[#F3F5F7] bg-white p-2 pt-4 xl:p-4 sm:relative  ease-in-out sm:max-w-[100px] xl:max-w-[286px] xl:flex-[286px] 
        fixed bg-white  max-w-[100%] z-2 sm:relative 
        ${!isMobileOpen ? "left-[-100%]" : "left-[0]"}
         sm:static sm:translate-x-0
        
       
        `}
      >
        <button
          className="hidden xl:block absolute sm:right-[-15px] cursor-pointer z-5 "
          onClick={handleSubmit}
        >
          <img src={arrowButton} alt="arrowBtn" />
        </button>
        
         <button
          className="block sm:hidden absolute sm:right-[-15px] cursor-pointer z-5"
          onClick={() => setIsMobileOpen(prev => !prev)}

        >
          <img src={arrowButton} alt="arrowBtn" />
        </button>

        <SideBar isOpen={setIsOpen} />
      </div>
      <div
        className={` 
          xl:flex-[100%]
          bg-[#F9FAFB] min-h-screen w-full sm:max-w-[calc(100%-100px)] xl:max-w-[calc(100%-286px)]
             
            
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
