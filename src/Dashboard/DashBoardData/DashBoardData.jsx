import React from 'react'
import DashBoardHeader from './DashBoardHeader/DashBoardHeader'
import DashBoardTab from './DashBoardTab/DashBoardTab'

const DashBoardData = ({setIsOpen}) => {
  return (
    <div>
        <DashBoardHeader setIsOpen={setIsOpen}/>

        <DashBoardTab/> 
    </div>
  )
}

export default DashBoardData
