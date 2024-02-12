import React from "react";
import "./Nav.css";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import { filterArr, sortArr } from "../../constants/data";

const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <SortAndFilter title={"Filter By"} optionsArr={filterArr} />
        <SortAndFilter title={"Sort By"} optionsArr={sortArr} />
      </div>
    </nav>
  );
};

export default Nav;
