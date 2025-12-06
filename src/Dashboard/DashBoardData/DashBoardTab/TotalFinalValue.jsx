import React from 'react'
import upIcon from "../../../assets/Images/upIcon.png"
import lowIcon from "../../../assets/Images/lowIcon.png"

const totalFinalValueData = [
    {
        id:1,
        title: "Total Income",
        amount: "$50,530.00",
        currency: "USD",
        percentage: "20%",
        text:"increase compared to last week",
        upIcon: upIcon,
    },
     {
        id:2,
        title: "Total  Expense",
        amount: "$19,760.00",
        currency: "USD",
        percentage: "10%",
        text:"decrease compared to last week",
        lowIcon: lowIcon,
        
        
    },
]

const TotalFinalValue = () => {
  return (
    <>
        <div className='grid grid-col-1 lg:grid-cols-2 gap-15 relative after:content-[""] after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-px after:bg-[#F3F5F7] after:hidden lg:after:block'>
            {totalFinalValueData.map((items, index)=>{
                return( 
                <div className={``} 
                key={index}>
            <div className='flex flex-wrap justify-between items-center mb-4'>
                 <h5>{items.title}</h5>
                 {items.lowIcon ? <img src={lowIcon} alt='lowIcon'/> :
                 <img src={upIcon} alt='upIcon'/>}
            </div>
            <h3 className='mb-[14px] text-[32px] font-bold'>{items.amount}<sub className='font-light text-xs ml-2 text-[rgba(144,163,191,1)]'>( USD )</sub></h3>
            <p className='text-xs flex text-[rgba(144,163,191,1)]'><span className={`${items.percentage === "10%" ? "text-[red]" : "text-[green]"} block mr-1 font-bold`}>{items.percentage}</span>{items.text}</p>
        </div>)
    })}
        </div>
       
    </>
  )
}

export default TotalFinalValue
