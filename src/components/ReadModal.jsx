import React from 'react'
import { useSelector } from 'react-redux'

const ReadModal = ({setPopup, popUp,id}) => {
    const allData = useSelector((state)=>state.app.users)
    const singleData = allData.filter((ele)=>ele.id == id)
   
  return (
    <div onClick={()=>{setPopup(false)}} className="fixed bg-black top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 opacity-90">
         
         <div className="bg-white shadow-lg rounded-lg p-6 h-65  w-85">
            <div className='justify-end flex mb-2  '>

              <button  onClick={()=>setPopup(false)} className='bg-red-500 px-1 rounded-md text-amber-50 hover:bg-red-700'>close</button>
            </div>
              <h5 className="text-4xl text-center font-semibold mb-4"> 
                Single Data  
              </h5> 
              <p className="text-gray-900 mb-1">
                <span className="font-medium">Name:</span> {singleData[0]?.name}
              </p>
              <p className="text-gray-900 mb-1">
                <span className="font-medium">Email:</span> {singleData[0]?.email}
              </p>
              <p className="text-gray-900 mb-1">
                <span className="font-medium">Age:</span> {singleData[0]?.age}
              </p>
              <p className="text-gray-900">
                <span className="font-medium">Gender:</span> {singleData[0]?.gender}
              </p>
              
           </div>
    </div>
  )
}

export default ReadModal

