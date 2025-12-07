import React from "react";
import TotalFinalValue from "./TotalFinalValue";
import TransactionHistory from "./TransactionHistory";
import YourBalance from "./YourBalance";
import SpendByCategory from "./SpendByCategory";
import ApexChart from "../../../assets/Components/ApexChart";

const DashBoardTab = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row p-[15px] sm:p-[32px] gap-[24px] h-[calc(100vh-20vh)] sm:overflow-auto  sm:overflow-x-hidden ">
        <div className="xl:flex-[60%] xl:max-w-[60%]  2xl:flex-[75%] 2xl:max-w-[75%] ">
          <div className="bg-white rounded-md p-4">
            <div className="flex justify-between items-center  ">
              <h5> Spending Statistics</h5>
              <div className="flex items-center gap-4">
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.8"
                      width="24"
                      height="24"
                      rx="6"
                      fill="#F6F7F9"
                    />
                    <path
                      d="M13.5 15.96L10.24 12.7C9.855 12.315 9.855 11.685 10.24 11.3L13.5 8.04001"
                      stroke="#1A202C"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-sm">2024</p>
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.8"
                      width="24"
                      height="24"
                      rx="6"
                      fill="#F6F7F9"
                    />
                    <path
                      d="M10.455 15.96L13.715 12.7C14.1 12.315 14.1 11.685 13.715 11.3L10.455 8.04001"
                      stroke="#1A202C"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ApexChart />
          </div>
          <div className="bg-white rounded-md p-4 mt-[24px]">
            <TotalFinalValue />
          </div>

          <div className="bg-white rounded-md p-4 mt-[24px]">
            <TransactionHistory />
          </div>
        </div>
        <div className="xl:flex-[40%] xl:max-w-[calc(40%-24px)] 2xl:flex-[25%] 2xl:max-w-[25%] ">
          <YourBalance />
          <SpendByCategory />
        </div>
      </div>
    </>
  );
};

export default DashBoardTab;
