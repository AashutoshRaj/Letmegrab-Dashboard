import React, { useEffect, useState } from 'react'

const UpdateForm = () => {
const [isEdit, setIsEdit] = useState(null);

  // Update
  useEffect( async (id) => {
 try{
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log("check response", response.data )
          setIsEdit(response.data); 
    }catch(error){
        console.log("Not getting the product update popup", error);
    }
  })


     const handleSubmitCloseClick = () => {
        setIsEdit(null);
    };
  return (
    <>
    {isEdit &&(
           <div  className="fixed top-0 left-0 w-full h-screen bg-[#0000008a] flex justify-center items-center">
            <div
            className="bg-white p-6 rounded-xl max-w-[500px] w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Edit Details</h3>
            <div className="">
              <from>

              </from>
            </div>
             <button
              onClick={handleSubmitCloseClick}
              className="cursor-pointer text-black  px-4  py-2 rounded absolute top-0 right-0"
            >
              ×
            </button>
          </div>
        </div> 
    )}
      
    </>
  )
}

export default UpdateForm
