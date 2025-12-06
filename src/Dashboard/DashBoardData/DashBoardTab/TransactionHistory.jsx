import React from "react";
import bankTransferIcon from "../../../assets/Images/bankTransfr.png";
import paypalIcon from "../../../assets/Images/paypal.png";
import figmaIcon from "../../../assets/Images/figmaic.png";
import downIcon from "../../../assets/Images/arrow-down.png"

const transactionHistoryData = [
  {
    id: 1,
    icon: bankTransferIcon,
    transaction: "Bank Transfer",
    date: "Jan 01,2022",
    amount: "$2,000.00",
    status: "Completed",
  },
   {
    id: 2,
    icon: paypalIcon,
    transaction: "Paypal Account",
    date: "Jan 04,2022",
    amount: "$2,000.00",
    status: "Pending ",
  },
   {
    id: 3,
    icon: figmaIcon,
    transaction: "Bank Transfer",
    date: "Jan 06,2022",
    amount: "$2,000.00",
    status: "On Hold",
  }
]

const TransactionHistory = () => {
  return (
    <>
      <div className="bg-white rounded-md">
        <div className="flex justify-between items-center   ">
          <h5>Transaction History</h5>
          <div className="flex items-center gap-4"></div>
        </div>

      <div className="mx-[-20px] overflow-x-auto">
        <table className="w-full mt-4">
          <thead className="">
            <tr className="border-y border-[#F3F5F7] ">
              <th className="min-w-[200px] text-left py-4 font-light text-[#90A3BF] px-[20px] text-xs">Transactions</th>
              <th className="min-w-[200px] text-left py-4 font-light text-[#90A3BF] cursor-pointer text-xs "><p className="flex items-center gap-2">Date <img src={downIcon} alt="" className="w-[13px]"/></p></th>
              <th className="min-w-[200px] text-left py-4 font-light text-[#90A3BF] cursor-pointer text-xs "><p className="flex items-center gap-2">Amount <img src={downIcon} alt="" className="w-[13px]"/></p></th>
              <th className="min-w-[200px] text-left py-4 font-light text-[#90A3BF] cursor-pointer text-xs "><p className="flex items-center gap-2">Status <img src={downIcon} alt="" className="w-[13px]"/></p></th>
            </tr>

              </thead>
              <tbody>
                {transactionHistoryData.map((item,index)=>{
                  return(
                      <tr className="border-b border-[#F3F5F7] hover:bg-[#f2f2f2] " key={index}>
                  <td className="py-4 px-[20px] text-sm">
                    <img src={item.icon} alt="icon" className="inline-block mr-3"/>
                    {item.transaction}</td>
                  <td className="py-4 text-sm">{item.date}</td>
                  <td className="py-4 text-sm">{item.amount}</td>
                  <td className="py-4 text-sm relative pl-8 text-xs">
                    <span 
                    className={`absolute top-[25px] left-0 block w-4 h-4 rounded-full 
                    ${item.status === "Completed" 
                      ? "bg-[#7FB519] shadow-[0_0_0_7px_#BCE4554D] "  
                    : item.status === "Pending"
                    ? "bg-[#DBA32A] shadow-[0_0_0_7px_#DB27194D]" 
                    : "bg-[#DB2719] shadow-[0_0_0_7px_#DB27194D]"}`}>

                    </span>
                    {item.status}</td>
                  </tr>
                  )
                })}
              
              </tbody>
              </table>
      </div>

      </div>
    </>
  );
};

export default TransactionHistory;
