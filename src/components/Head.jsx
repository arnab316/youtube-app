import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux"
import {toggleMenu} from '../utils/appSlice'
import React,{ useState,useEffect } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/constant"
import {cacheResults} from '../utils/searchSlice'
import axios from 'axios';
const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);
   const searchCache = useSelector((store) => store.search);
   const dispatch = useDispatch()


useEffect(()=>{
// Api call
const timer = setTimeout(()=>{
  if (searchCache[searchQuery]) {
    setSuggestions(searchCache[searchQuery]);
  } else {
    getSearchSugestions();
  }
}, 200);

return () => {
  clearTimeout(timer);
};
},[searchQuery])

const getSearchSugestions = async ()=>{
   const data = await axios.get(YOUTUBE_SEARCH_API +searchQuery );
        setSuggestions(data.data[1]);
        dispatch(
                 cacheResults({
                   [searchQuery]: data.data[1], 
                 })
              );

}

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
   <img  alt="menu"
   onClick={()=>toggleMenuHandler()}
   className="h-8 cursor-pointer "
   src="https://static.thenounproject.com/png/703781-200.png"  />
   <img alt="Logo"
   className="h-8 mx-2"
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q-H7A7-XNWqvZju8Maqd6S_f-Pr9FssqQ7pgxEVKxA&s"
   />
   </div>
   <div className="col-span-10 px-2  ">


<div>
   <input type="text"
   value={searchQuery}
   onChange={(e)=>{setSearchQuery(e.target.value)}}
 className="w-1/2 border border-gray-400 p-2 rounded-l-full"
 onFocus={()=>{setShowSuggestion(true)}}
 onBlur={()=>{setShowSuggestion(false)}}
 
  />

   <button type="button" className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100" >🔍</button>

   </div>
   {showSuggestion && <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
    <ul>
    {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
             <div className='flex'><AiOutlineSearch  />   {s}</div>     
                </li>
              ))}
     </ul></div>} 

   </div>

   <div className="col-span-1">
    <img
    className="h-8"
     src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" 
    alt="usericon" />
   </div>
    </div>
  )
}

export default Head
