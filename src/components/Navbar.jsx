'use client';

import { searchUser } from '@/features/userDetailSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const allUsers = useSelector((state)=>state.app.users)
  const [searchData , setSearchData] = useState('')
  const dispatch = useDispatch()

  // console.log(searchData);
  
  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          CURD
        </Link>
        <div className="flex items-center gap-10">
          <Link href="/" className="hover:text-gray-300">
            Create Post
          </Link>
          <Link href="/read" className="hover:text-gray-300">
            All Post <span className='bg-red-500 rounded-2xl p-0.5 text-sm ml-1 text-white'> {allUsers.length}</span> 
          </Link>
        </div>

          <div className="flex">
            <input
              type="search"
              placeholder="Search"
              className="px-2 py-1 rounded-l bg-white text-black border border-gray-300"
              value={searchData}
              onChange={(e)=>{setSearchData(e.target.value)}}
            />
            
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
