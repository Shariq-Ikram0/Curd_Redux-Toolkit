"use client";
// import ReadCard from "@/components/ReadCard";
import React, { useEffect, useState } from "react";
import { deleteUser, readUser } from "@/features/userDetailSlice";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

import ReadModal from "@/components/ReadModal";
import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const [id, setId] = useState();
  const [popUp, setPopup] = useState(false);
  const [radioData , setRadioData]=useState('');

  // Removed erroneous router.push("../update");

  const { users, loading, searchData } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) {
    return (
      <h1 className="text-4xl text-center font-semibold mb-4 text-white">
        Loading...
      </h1>
    );
  }
  return (
    <>
      <Navbar />

      <div className="flex-row  justify-center">
        <h1 className="text-4xl text-white mt-3 text-center font-semibold ">
          All Data
        </h1>
      </div>
      <div className="flex  justify-center gap-3 text-amber-50 font-bold">
        <input 
           className="form-check-input" 
           name="gender" 
           checked={radioData === ''} 
           type="radio"
           onChange={(e)=>{setRadioData('')}}
            />
        <label class="form-check-lable">All</label>
        <input
          className="form-check-input"
          name="gender"
          value="male"
          type="radio"
          checked={radioData === 'male'}
          onChange={(e)=>{setRadioData(e.target.value)}}
        />
        <label class="form-check-lable">Male</label>

        <input
          className="form-check-input"
          name="gender"
          value="female"
          type="radio"
          checked={radioData === 'female'}
          onChange={(e)=>{setRadioData(e.target.value)}}



        />
        <label class="form-check-lable">Female</label>
      </div>
      <div className="flex flex-wrap justify-center">
        {popUp && <ReadModal id={id} popUp={popUp} setPopup={setPopup} />}
        {users &&
        
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele)=>{
                if (radioData === 'male') {
                  return ele.gender ===radioData
                  
                } else if(radioData === 'female'){
                   return ele.gender ===radioData
                }
                else{
                   return ele
                }  
                
              })
              
            .map((ele) => (
              <div key={ele.id} className=" m-8">
                <div className="bg-white shadow-lg rounded-lg p-6 w-80">
                  <h5 className="text-4xl text-center font-semibold mb-4">
                    Read Data
                  </h5>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Name:</span> {ele.name}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Email:</span> {ele.email}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Age:</span> {ele.age}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Gender:</span> {ele.gender}
                  </p>
                  <div className="flex justify-center gap-6 mt-3">
                    <Link
                      href={"#"}
                      className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
                      onClick={() => [setId(ele.id), setPopup(true)]}
                    >
                      View
                    </Link>
                    <Link
                      href={ele.id ? `/read/${ele.id}` : "#"}
                      className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => dispatch(deleteUser(ele.id))}
                      href={"#"}
                      className="bg-blue-500 text-amber-50 font-semibold text-xl px-2 rounded-md hover:bg-blue-700"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Card;
