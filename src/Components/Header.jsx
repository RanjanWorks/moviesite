"use client";
import React from "react";
import Search from "./Search";
import Link from "next/link";
import { MdVideoLibrary } from "react-icons/md";


const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full p-4 bg-zinc-950/90 px-5 border-b-1 bg-opacity-50 backdrop-blur-sm  border-b border-zinc-800   py-3 flex items-center justify-between">
      <Link href={`/`}>
        <div>
          <h1 className="  text-zinc-50 font-semibold ">
            <span className=" px-3 py-1 bg-zinc-50 text-zinc-900 rounded-l-md">
              R
            </span>
            <span className=" ml-1 px-3 py-1 bg-zinc-50 text-zinc-900 rounded-r-md">
              Flix
            </span>
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Search />
        <Link href={`/watchlist`}>
          <i className="text-gray-400 hover:text-white transition-colors">
            <MdVideoLibrary size={25} />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
