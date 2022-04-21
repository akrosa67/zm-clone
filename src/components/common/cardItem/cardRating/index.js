import React from "react";
import "./cardRating.css";

const CardRating = ({ value }) => {
  return (
    <div className="rating absolute-center">
      <span className="rating-text"> {value} </span>
      <i className="fi fi-sr-star  absolute-center rating-icon"></i>
    </div>
  );
};

export default CardRating;
