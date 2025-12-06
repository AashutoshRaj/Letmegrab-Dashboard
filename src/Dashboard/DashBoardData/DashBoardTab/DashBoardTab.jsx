import React from 'react'
import TotalFinalValue from './TotalFinalValue'
import TransactionHistory from './TransactionHistory'
import YourBalance from './YourBalance'
import SpendByCategory from './SpendByCategory'
import ApexChart from '../../../assets/Components/ApexChart'

const DashBoardTab = () => {
  return (
   <>
    <div className='flex flex-col xl:flex-row p-[15px] sm:p-[32px] gap-[24px] h-[calc(100vh-80px)] overflow-auto'>
        <div className=' basis-1/2 xl:basis-2/3'>
        <div className='bg-white rounded-md p-4'>
           <div className='flex justify-between items-center  '>
                    <h5> Spending Statistics</h5>
                <div className='flex items-center gap-4'>
                    <button className=''>Day</button>
                    <p>2024</p>
                    <button className=''>Day</button>
                </div>
           </div>
                <ApexChart/>
                </div>
           <div className='bg-white rounded-md p-[24px] mt-[24px]'>
                <TotalFinalValue/>
           </div>

           <div className='bg-white rounded-md p-[24px] mt-[24px]'>
                <TransactionHistory/>
           </div>

          
        </div>
        <div className='basis-1/1 md:basis-1/3'>
            <YourBalance/>
            <SpendByCategory/>
        </div>
    </div>
   </>
  )
}

export default DashBoardTab
