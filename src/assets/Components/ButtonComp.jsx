import React from 'react'

const ButtonComp = ({buttonTitle, icon, className}) => {
  return (
    <>
        <button className=' group text-[#1A202C] border border-[var(--primary-color)] px-4 py-2 rounded-md hover:bg-[var(--primary-color)] hover:text-white  cursor-pointer transition duration-300 flex items-center gap-[5]'>{icon}{buttonTitle}</button>
    </>
  )
}

export default ButtonComp
