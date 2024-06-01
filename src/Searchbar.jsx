import React, { useEffect } from "react";
import searchIcon from "./search.svg";
import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-9/12 mt-16 mb-8 ml-0 mr-0 flex items-center justify-center pt-6 pb-6 pl-7 pr-7 rounded-full bg-primary shadow-2xl ">
      <input
        className="flex-1 text-xl border-none bg-transparent text-white focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img
        src={searchIcon}
        className="w-10, h-10 cursor-pointer"
        alt="Search icon"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
