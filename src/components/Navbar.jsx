'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
            All Post
          </Link>
        </div>

          <form className="flex">
            <input
              type="search"
              placeholder="Search"
              className="px-2 py-1 rounded-l bg-white text-black border border-gray-300"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-r bg-blue-500 hover:bg-blue-700 text-white"
            >
              Search
            </button>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
