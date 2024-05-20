import React, { useContext } from "react";
import { GrSearch } from "react-icons/gr";
import MainContext from "../MainContext";

export default function Search() {
  const { search, setSearch } = useContext(MainContext);
  console.log(search)

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Brands"
      />
    </div>
  );
}
