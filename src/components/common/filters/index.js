import React from "react";
import FilterItem from "./filterItem";
import "./filters.css";

const Filters = ({ filterList }) => {
  return (
    <div className="filter-wrapper">
      <div className="filters max-width">
        {filterList &&
          filterList.map((_) => {
            return <FilterItem filter={_} key={_.id} />;
          })}
      </div>
    </div>
  );
};

export default Filters;
