import React from 'react'
import threeDots from "../../../assets/Images/more.png"
import ButtonComp from '../../../assets/Components/ButtonComp'
import { MoneySend } from '../../../assets/Icons/Invoice'

const YourBalance = () => {
  return (
    <>
        <div className='bg-white rounded-md p-[24px]'>
                <div className='flex justify-between items-center mb-[24px]'>
                    <h5>Your balance</h5>
                    <div className='cursor-pointer'>
                        <img src={threeDots} alt=''/>
                    </div>
                </div>
                    <h3 className='mb-[14px] text-[32px] font-bold'>$120,435.00<sub className='font-light text-xs ml-2 text-[rgba(144,163,191,1)]'>( USD )</sub></h3>
                    <p className='text-xs flex text-[rgba(144,163,191,1)]'>From Jan 01, 2022 to Jan 31, 2022</p>
                    <div className='flex flex-wrap gap-4 mt-[24px]'>
                        <ButtonComp  
                        buttonTitle="Top Up" 
                        className="group"
                        icon={<MoneySend className="w-4 h-4 mr-2 group-hover:stroke-white"/>}/>
                       <ButtonComp  
                        buttonTitle="Transfer" 
                        className="group"
                        icon={<MoneySend className="w-4 h-4 mr-2 group-hover:stroke-white"/>}/>
                    </div>
            </div>
    </>
  )
}

export default YourBalance
