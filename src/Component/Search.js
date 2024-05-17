import React from "react";
import { GrSearch } from "react-icons/gr";

export default function Search() {
  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input type="text" placeholder="Search Brands" />
    </div>
  );
}
