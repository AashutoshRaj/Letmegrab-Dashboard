import React from 'react'
import threeDots from "../../../assets/Images/more.png"
import SpendbyCategoryChart from '../../../assets/Components/SpendbyCategoryChart'
const SpendByCategory = () => {
  return (
    <div>
        <div className='bg-white rounded-md p-[24px] mt-[24px]'>
            <div className='flex justify-between items-center mb-[24px]'>
                                <h5>Spend by category</h5>
                                <div className='cursor-pointer'>
                                    <img src={threeDots} alt=''/>
                                </div>
                            </div>
            <div className='flex flex-col gap-4'>
                <SpendbyCategoryChart/>
            </div>
    </div>
    </div>
  )
}

export default SpendByCategory
