"use client";
import Navbar from "@/components/Navbar";
import { userUpdate } from "@/features/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "next/navigation";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter()
  const { editId } = useParams();
  const dispatch = useDispatch();
  

  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (editId && users.length > 0) {
      const singleUser = users.find((ele) => String(ele.id) === String(editId));
      setUpdateData(singleUser);
    }
  }, [editId, users]);

  const newData = (e)=>{
    setUpdateData({...updateData, [e.target.name]:e.target.value})
  }
  const handleSubmit =(e)=>{
      e.preventDefault()
       dispatch(userUpdate(updateData))
           router.push('/read')

  }

  return (
    <>
      <Navbar />

      <form className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <h1 className=" text-3xl font-Bold text-center ">Update User Data</h1>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            value={updateData?.name || ""}
            name="name"
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={newData}
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
            value={updateData?.email || ""}
            name="email"
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={newData}
          />
        </div>
        {/* age Field */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-black">
            Age
          </label>
          <input
            value={updateData?.age || ""}
            name="age"
            type="text"
            id="age"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={newData}
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
                checked={updateData?.gender === "male"}
                type="radio"
                name="gender"
                value="male"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={newData}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center text-sm text-black">
              <input
                checked={updateData?.gender === "female"}
                type="radio"
                name="gender"
                value="female"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={newData}
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
    </>
  );
};

export default Page;
