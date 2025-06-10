"use client";

import { createUser } from "@/features/userDetailSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter()
  const [users, setUsers ] = useState({});

  const dispatch = useDispatch()


  
  const getUserData =(e)=>{
      setUsers({...users, [e.target.name]: e.target.value });
  }
    
  const handleSubmit = (e)=>{
     e.preventDefault();
      console.log(users)

    dispatch(createUser(users))
    router.push('/read')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      {/* Name Field */}
      <div className="mb-4">
        <h1  className=" text-3xl font-Bold text-center " >Create Data</h1>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-black"
        >
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={getUserData}
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black"
        >
          Email address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={getUserData}
        />
      </div>
      {/* age Field */}
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-black"
        >
          Age
        </label>
        <input
          name="age"
          type="text"
          id="age"
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={getUserData}
        />
      </div>

      {/* Gender Selection */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-black mb-2">
          Gender
        </span>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-sm text-black">
            <input
              type="radio"
              name="gender"
              value="male"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              onChange={getUserData}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center text-sm text-black">
            <input
              type="radio"
              name="gender"
              value="female"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              onChange={getUserData}
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
