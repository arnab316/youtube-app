import { BsChevronCompactDown } from "react-icons/bs";
import { BiCut } from "react-icons/bi";
import { BiSolidVideos } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { CiStopwatch } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { useSelector } from "react-redux";
import React from 'react'
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
 if (!isMenuOpen) return null;
 
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="font-bold">
        <li> <Link to='/'> Home </Link></li>
        <li>Shorts</li>
      </ul>  
      <h1 className="font-bold pb-5">Subcriptions</h1>
      <ul>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          Music</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">Sports</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          Gaming</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          Movies</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          <BiLibrary/> library</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          <FaHistory/> History</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
          <BiSolidVideos/> Your videos</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer">
           <CiStopwatch/> Watch Later</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer"> 
        <BiCut/> Your clips</li>
        <li className="flex items-center justify-center w-auto h-13 rounded bg-transparent hover:bg-gray-300 cursor-pointer"> 
        <BsChevronCompactDown/> Show more</li>
      </ul>
    </div>
  )
}

export default SideBar
