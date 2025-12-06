import React from "react";
import { Notification, SearchIcon } from "../../../assets/Icons/Invoice";
import UserProfile from "./UserProfile";
import logoMobile from "../../../assets/Images/logoGrab.png"
const DashBoardHeader = ({setIsOpen}) => {

  const notificationList = [
    {
      id: 1,
      read: false,
      textNotification: "Notification 1",
    },
    {
      id: 2,
      read: false,
      textNotification: "Notification 2",
    },
  ];

  const notificationSign = true;
  return (
    <>
      <div className="flex  justify-between items-center gap-5 border-b border-[#F3F5F7] py-[18px] px-8 bg-white">
        <button className="block sm:hidden text-[#596780] cursor-pointer" onClick={()=>{setIsOpen(prev=>!prev)}}>
          ☰
        </button>
          <div className="block sm:hidden">
            <img src={logoMobile} alt=""></img>
          </div>
        <div className="hidden sm:block grow-0 shrink-0 basis-1/2 relative max-w-200px lg:max-w-[492px] w-full">
          <input
            type="search"
            className="h-[44px] rounded-full border border-[#F3F5F7] w-full max-w-[492px] pl-15 outline-none"
            placeholder="Search something here"
          />
          <SearchIcon className="absolute top-1/2 left-5 -translate-y-1/2 text-[#596780]" />
        </div>
        <div className="grow-0 shrink-0 basis-1/2 flex justify-end items-center gap-[32px]">
          <div className="group border border-[#F3F5F7] min-w-[44px] min-h-[44px] rounded-full flex justify-center items-center cursor-pointer relative">
            <Notification className="text-[#596780]" />
            {notificationSign > 0 && (
              <>
                {" "}
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold w-3 h-3 rounded-full flex justify-center items-center">
                  {notificationSign}
                </div>
              </>
            )}

            {notificationSign === true && (
              <div className="absolute top-10 right-0 bg-white w-[240px] shadow-lg rounded-md  hidden group-hover:block">
                {notificationList.map((items, index) => {
                  return (
                    <div className="p-4 hover:bg-[#f2f2f2]" key={index}>
                      {items.textNotification}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <UserProfile/>
        </div>
      </div>
    </>
  );
};

export default DashBoardHeader;
