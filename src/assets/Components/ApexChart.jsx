import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
   series: [
  {
    name: "Expense",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 75, 80], 
  },
],



    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
      show: false,   
    },
      },
      colors: ["var(--primary-color)"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 3,
          borderRadiusApplication: "end",
          colors: {
                normal: "#10B981",        
                hover: "#000000",        
                },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct",
        "Nov", "Dec"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      
      tooltip: {
        x: {
                    show: false,   
                },
        y: {
          formatter: (val) => "$ " + val + " thousands",
        },
      },
    },

  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
