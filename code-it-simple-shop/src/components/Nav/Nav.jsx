import React from "react";
import "./Nav.css";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import { sortArr } from "../../constants/data";

const Nav = ({filterArr, onChange}) => {



  return (
    <nav className="product-filter">
      <h1>Code It Simple SHOP</h1>

      <div className="sort">
        <SortAndFilter title={"Filter By"} optionsArr={filterArr} onChange={onChange}/>
        {/* <SortAndFilter title={"Sort By"} optionsArr={sortArr} onChange={!isFilter ? onChange : ()=>{}}/> */}
      </div>
    </nav>
  );
};

export default Nav;
