import React, { useState } from "react";
import arrowIcon from "../../../assets/Images/arrow-down.png";
import userProfile from "../../../assets/Images/userImage.png";
const UserProfile = () => {
 const isAuthenticated = localStorage.getItem("auth") === "true";
 const userName = localStorage.getItem("loggedUserName") || "User";

  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <div className="min-w-[44px] min-h-[44px] rounded-full border border-[#F3F5F7] flex justify-center items-center cursor-pointer">
          <img
            src={userProfile}
            alt="userprofile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      
        <p className="hidden sm:block">{userName}</p>
        {!isDropDown ? (
          <img src={arrowIcon} alt="arrowicon" className="w-4 h-4 " />
        ) : (
          <img src={arrowIcon} alt="arrowicon" className="w-4 h-4 rotate-180" />
        )}
        {isDropDown && (
          <div className="absolute top-16 right-8 bg-white w-[160px] shadow-lg rounded-md z-1">
            <div className="p-4 hover:bg-[#f2f2f2] cursor-pointer">Profile</div>
            <div className="p-4 hover:bg-[#f2f2f2] cursor-pointer">
              Settings
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
