import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SpendbyCategoryChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 13, 33, 27, 18],
    options: {
      chart: {
        width: 580,        
        type: "donut",
      },
        plotOptions: {
    pie: {
      donut: {
        size: "70%",   
      }
    }
  },
  stroke: {
    width: 8,          // reduce gap border
  },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 320,
          options: {
            chart: {
              width: 300,
              
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        show: false,
        position: "bottom",
        offsetx: 0,
        
      },
    },
  });

  const chartValues = [
    {
        name: "Employees Salary",
        amount: "$8.000.00",
    },
     {
        name: "Material Supplies",
        amount: "$2.130.00",
    },
     {
        name: "Company tax",
        amount: "$1.510.00",
    },
     {
        name: "Maintenance system",
        amount: "$2.245.00",
    },
     {
        name: "Development System",
        amount: "$4.385.00",
    },
     {
        name: "Production Tools ",
        amount: "$1.000.00",
    },
  ]

  const colors = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  return (
    <div className="p-4 flex flex-col justify-center items-center">
     <div className="relative">
<ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={340}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-sm text-gray-500">Total Spend</p>
        <p className="text-2xl font-bold">$19,760,00</p>
      </div>
     </div>
      

      <div className="w-full">    
        <ul className="text-sm text-[#596780] flex flex-col  gap-2 mt-4">
            {chartValues.map((items, index)=>{
                return <li className="flex justify-between  mb-[17px]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{backgroundColor:colors[index]}}></span>
                        <span>{items.name}</span>
                    </div>
                    <span className="font-bold text-black">{items.amount}</span>
                    </li>
            })}
           
        </ul> 
      </div>

    
    </div>
  );
};

export default SpendbyCategoryChart;
