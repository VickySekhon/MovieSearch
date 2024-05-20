import React, { useEffect } from "react";
import searchIcon from "./search.svg";
import { useState } from "react";

const Searchbar = ({onSearch}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <input 
      placeholder="Search..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <img src={searchIcon} alt="Search icon" onClick={handleSearch} />
    </div>
  );
};

export default Searchbar;
