import React from "react";
import "./filterItem.css";

const FilterItem = ({ filter }) => {
  return (
    <div className="filter-item cur-po">
      {filter.icon && <i className={`${filter.icon} absolute-center icon-margin`}></i>}
      <div className="filter-name">{filter.title}</div>
    </div>
  );
};

export default FilterItem;
