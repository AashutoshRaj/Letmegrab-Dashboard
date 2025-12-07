import React, { useState } from "react";
import logo from "../../assets/logoGrab.png";
import iconLogo from "../../assets/Images/SliderImages/IconlogoGrab.png"
import {
  DarkModeIcon,
  DashboardIcon,
  HelpCenterIcon,
  InboxIcon,
  Insight,
  Invoice,
  LogoutIcon,
  MoonIcon,
  ProductIcon,
  Reimburse,
  SettingIcon,
  SunIcon,
} from "../../assets/Icons/Invoice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({isOpen}) => {
  const [isDark, setIsDark] = useState(false);

  const navigate = useNavigate();
  const handleSubmitTheme = () => {
    setIsDark((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
    toast.success("Logout");
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon className="fill-[var(--primary-color)]" />,
      active: true,
    },
    { label: "Insight", icon: <Insight /> },
    { label: "Invoices", icon: <Invoice /> },
    { label: "Products", icon: <ProductIcon /> },
    { label: "Reimburse", icon: <Reimburse /> },
    { label: "Inbox", icon: <InboxIcon /> },
    { label: "People & Teams", icon: <InboxIcon /> },
  ];

  const preferenceItems = [
    { label: "Settings", icon: <SettingIcon /> },
    { label: "Help & Center", icon: <HelpCenterIcon /> },
    // { label: "Dark Mode", icon: <DarkModeIcon/> },
  ];

  return (
    <div className="relative flex flex-col h-full items-baseline transition-all delay-150 pt-[50px] sm:p-0">
      {isOpen ? (<>
      <Link to="/">
        <img
          src={iconLogo}
          alt="logo"
          className="w-full hidden sm:block max-w-[80px] sm:max-w-[162px] mb-[30px]  object-cover w-full h-full object-left xl:object-none xl:h-auto"
        /></Link>
      </>) : (
         <div className="max-w-[50px] overflow-hidden mx-auto xl:m-0 xl:max-w-full ">
       <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-[162px] mb-[30px]  object-cover w-full h-full object-left xl:object-none xl:h-auto"
        /></Link>
      </div>
      )}
     
      <div className="overflow-auto h-[calc(100vh-169px)] w-full">
        <div className="mb-[56px]">
          <h6 className="mb-3 xl:pl-5 font-medium text-[14px] leading-[150%] tracking-[-0.02em] text-[#90A3BF] sm:text-center xl:text-justify">
            Menu
          </h6>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                
                className={`transition-all delay-150 h-[55px] mb-[5px] w-full flex sm:flex-col xl:flex-row  items-center gap-3 px-3 py-2 rounded-lg sm:text-[10px] xl:text-sm transition cursor-pointer
               ${isOpen ? "xl:!flex-col sm:!text-[10px] !px-1   " : " "}
                 
              ${
                item.active
                  ? "xl:bg-[var(--primary-color)] text-[var(--primary-color)] xl:text-white xl:shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              >
                <span>{item.icon}</span>

                <span> {item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="">
          <h6 className={`mb-3 xl:pl-5 font-medium text-[14px] leading-[150%] tracking-[-0.02em] text-[#90A3BF] sm:text-center xl:text-justify
            ${isOpen ? "text-[14px] !pl-0 " : " "} 
            `}>
            Preferences
          </h6>
          <nav className="space-y-2">
            {preferenceItems.map((item, index) => (
              <button
                key={index}
                className={`transition-all delay-150 h-[55px] mb-[5px] w-full flex sm:flex-col xl:flex-row items-center gap-3 px-2 xl:px-3 py-2 rounded-xl sm:text-[10px] xl:text-sm text-gray-600 hover:bg-gray-100 transition cursor-pointer
                 ${isOpen ? "xl:!flex-col sm:!text-[10px] !px-1 " : " "} 
                  `}
              >
                <span className="">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div
          className={`transition-all delay-150 h-[55px] mb-[5px] w-full flex sm:flex-col xl:flex-row items-center gap-3 px-3 py-2 rounded-xl sm:text-[10px] xl:text-sm text-gray-600 group hover:bg-gray-100 transition cursor-pointer
             ${isOpen ? "xl:!flex-col sm:!text-[10px] !px-1 " : " "} 
            `}
          onClick={handleSubmitTheme}
        >
          <span className="">
            <DarkModeIcon />
          </span>
          {isDark ? <p>Dark Mode</p> : <p>Light Mode</p>}

          <button
            className={`group bg-[#f2f2f2] group-hover:bg-gray-200 rounded-full px-3 py-2 relative`}
            onClick={() => setIsDark(!isDark)}
          >
            <span
              className={` transition-all duration-200 ease-linear bg-[var(--primary-color)] block absolute w-[22px] h-[23px] rounded-full top-1/2 left-1/2 
              ${
                isDark
                  ? "-translate-x-full -translate-y-1/2"
                  : "-translate-x-full -translate-y-1/2 left-[87%] "
              }`}
            ></span>
            <span
              className="flex items-center gap-2 z-2 relative "
              onClick={() => setIsDark(!isDark)}
            >
              <SunIcon
                className={`${isDark ? " " : " fill-[#333] stroke-[#333]"}`}
              />
              <MoonIcon className={`${!isDark ? "stroke-[#fff] " : " "}`} />
              {/* {!isDark ? <MoonIcon/> : <SunIcon/>} */}
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white">
        <button
          onClick={logout}
          className={`transition-all delay-150 h-[55px] mb-[5px] w-full flex sm:flex sm:flex-col xl:flex-row items-center gap-3 px-3 py-2 sm:text-[10px] xl:text-sm rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition cursor-pointer
             ${isOpen ? "xl:!flex-col sm:!text-[10px] !px-1" : " "} 
            `}
        >
          
          <span className="">
            <LogoutIcon />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
