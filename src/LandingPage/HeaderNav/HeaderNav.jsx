import React from 'react'
import logo from "../../assets/Images/logoGrab.png"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext';
import { isMobileOnly } from 'react-device-detect';
const HeaderNav = () => {

// const {isAuthenticated } = useAuth([])
const navigate = useNavigate()
const isAuthenticated = localStorage.getItem('auth') === 'true';

   const logout = () =>{
      localStorage.removeItem("auth");
      navigate("/")

   }
  return (
    <>
     <header className='bg-[var(--primary-color)] shadow-md'>
        <div className={`min-h-[82px] flex ${(!isAuthenticated  || location.pathname === "/product-table") || location.pathname === "/" ? "justify-between " : "justify-end"} items-center p-4 md:px-8`}>
         {(!isAuthenticated  || (location.pathname === "/product-table") ||  location.pathname === "/"  )  &&  (
            <div className=''>
            <Link to="/">
                <img src={logo} alt="logoGrab" className='w-[120px] h-[40px] md:w-[150px] md:h-[50px]'/>
                </Link>
             </div>
         )}
           
        <div className=''>
            <ul className='flex gap-5'>
               {isAuthenticated ? (<>
                 <li> <Link to="/product-table" className='group text-white border-0 border-white sm:px-4 sm:py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)]  cursor-pointer transition duration-300 flex items-center gap-[5]'>Products</Link></li>
                  <li> <Link to="/dashboard" className='group text-white border-0 border-white sm:px-4 sm:py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)]  cursor-pointer transition duration-300 flex items-center gap-[5]'>Dashboard</Link>    </li>
                  <li> <button onClick={logout} className='group text-white sm:border sm:border-white sm:px-4 sm:py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)]  cursor-pointer transition duration-300 flex items-center gap-[5]'>
                    {isMobileOnly ? '【⏻】' : "Logout"}
                     
                     </button>    </li>
               
               </>):(<>
               
                  <li> <Link to="/signup" className='group text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)]  cursor-pointer transition duration-300 flex items-center gap-[5]'>Sign Up</Link>    </li>
               <li> <Link to="/login" className='group text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[var(--primary-color)]  cursor-pointer transition duration-300 flex items-center gap-[5]'>
               Login
               
               </Link>    </li>
               </>)}
               
              
              
            
            </ul>    
        </div>     
        </div>     
     </header>   
    </>
  )
}

export default HeaderNav
