"use client";

import { useState } from "react";
import SearchInput from '../../../components/SearchInput';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <button onClick={toggleSearchVisibility}>
          <IoSearchOutline className="text-2xl"/>
        </button>
      </div>
      {isSearchVisible && (
      <div className="absolute top-full left-0 w-full bg-slate-950">
        <div className="top-full left-0 w-full p-5 bg-slate-950">
          <SearchInput />
        </div>
      </div>
    )}
    </div>
  );
};

export default SearchBar;